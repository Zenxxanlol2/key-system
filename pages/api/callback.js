import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: "No code provided" });

  // Dynamically detect your domain
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:3000`;

  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    code,
    redirect_uri: `${baseUrl}/api/callback`,
    scope: "identify"
  });

  const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    body: params,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    console.error("Token exchange failed:", tokenData);
    return res.status(400).json({ error: "Invalid token exchange" });
  }

  const userRes = await fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` }
  });
  const user = await userRes.json();

  // Path to whitelist.json
  const whitelistPath = path.join(process.cwd(), "whitelist.json");
  let whitelist = [];

  if (fs.existsSync(whitelistPath)) {
    whitelist = JSON.parse(fs.readFileSync(whitelistPath));
  }

  const userAgent = req.headers["user-agent"] || "Unknown Device";

  if (!whitelist.find((entry) => entry.discordId === user.id)) {
    whitelist.push({
      discordId: user.id,
      username: `${user.username}#${user.discriminator}`,
      device: userAgent,
      hwid: null
    });
    fs.writeFileSync(whitelistPath, JSON.stringify(whitelist, null, 2));
  }

  res.status(200).send(`
    <h1>✅ Logged in as ${user.username}#${user.discriminator}</h1>
    <p>Your Discord ID has been saved.</p>
    <p>Device: ${userAgent}</p>
  `);
}

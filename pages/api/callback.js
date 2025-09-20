import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import cookie from "cookie";

export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: "No code provided" });


  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
    client_secret: process.env.DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    code,
    redirect_uri: "https://site-4yp5.vercel.app/api/callback", 
    scope: "identify",
  });

  const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    body: params,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    return res.status(400).json({ error: "Invalid token exchange", details: tokenData });
  }


  const userRes = await fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });
  const user = await userRes.json();


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
      hwid: null,
    });
    fs.writeFileSync(whitelistPath, JSON.stringify(whitelist, null, 2));
  }


  res.setHeader(
    "Set-Cookie",
    cookie.serialize("user", JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })
  );

  res.redirect("/");
}

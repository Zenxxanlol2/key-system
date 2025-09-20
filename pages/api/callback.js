export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: "Missing code" });
  }

  try {
    const data = new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code,
      redirect_uri: "https://site-4yp5.vercel.app/api/callback",
      scope: "identify"
    });

    const response = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    const json = await response.json();

    if (json.error) {
      return res.status(400).json({ error: json.error, details: json });
    }

    // Fetch user info
    const userResponse = await fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `${json.token_type} ${json.access_token}`
      }
    });

    const user = await userResponse.json();

    return res.status(200).json({ user, token: json });
  } catch (err) {
    return res.status(500).json({ error: "OAuth2 error", details: err.message });
  }
}

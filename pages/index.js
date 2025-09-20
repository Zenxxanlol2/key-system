export default function Home() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
  const redirectUri = encodeURIComponent("https://your-vercel-app.vercel.app/api/callback");

  const loginUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=identify`;

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Roblox Script Whitelist</h1>
      <a href={loginUrl}>
        <button style={{ padding: "10px 20px", fontSize: "18px" }}>Login with Discord</button>
      </a>
    </div>
  );
}

export default function Home() {
  const clientId = "1418895386797674517";
  const redirectUri = encodeURIComponent("https://site-4yp5.vercel.app/api/callback");
  const discordUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=identify`;

  return (
    <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", background: "#23272A" }}>
      <div style={{ textAlign: "center", color: "white" }}>
        <img src="/syllinse.png" alt="Logo" style={{ width: "120px", marginBottom: "20px" }} />
        <h1>Syllinse Dashboard</h1>
        <a
          href={discordUrl}
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#5865F2",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Login with Discord
        </a>
      </div>
    </div>
  );
}

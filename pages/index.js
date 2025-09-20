export default function Home() {
  const clientId = "1418895386797674517";
  const redirectUri = encodeURIComponent(
    "https://site-4yp5.vercel.app/api/callback"
  );
  const discordUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=identify`;

  return (
    <div
      style={{
        background: "#23272a",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* Logo */}
        <img
          src="/syllinse.png"
          alt="Syllinse Logo"
          style={{ width: "120px", marginBottom: "20px" }}
        />

        {/* Title */}
        <h1 style={{ marginBottom: "10px" }}>Syllinse Dashboard</h1>
        <p style={{ opacity: 0.8 }}>Manage your scripts and access keys</p>

        {/* Options */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <a
            href={discordUrl}
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#5865f2",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              width: "200px",
              textAlign: "center",
              transition: "0.2s",
            }}
          >
            Login with Discord
          </a>

          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#2c2f33",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              width: "200px",
              textAlign: "center",
              transition: "0.2s",
            }}
          >
            Scripts
          </a>

          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#2c2f33",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              width: "200px",
              textAlign: "center",
              transition: "0.2s",
            }}
          >
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}

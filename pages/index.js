export default function Home() {
  const clientId = "1418895386797674517";
  const redirectUri = encodeURIComponent(
    "https://site-4yp5.vercel.app/api/callback"
  );
  const discordUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=identify`;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #23272a, #2c2f33, #23272a)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 12s ease infinite",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, Arial, sans-serif",
        color: "white",
      }}
    >
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div
        style={{
          textAlign: "center",
          background: "rgba(35, 39, 42, 0.85)",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
          maxWidth: "400px",
          width: "90%",
          backdropFilter: "blur(6px)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Logo */}
        <img
          src="/syllinse.png"
          alt="Syllinse Logo"
          style={{
            width: "120px",
            marginBottom: "20px",
            filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.2))",
          }}
        />

        {/* Title */}
        <h1 style={{ fontSize: "26px", marginBottom: "15px", letterSpacing: "1px" }}>
          Syllinse Dashboard
        </h1>
        <p style={{ fontSize: "14px", color: "#b9bbbe", marginBottom: "25px" }}>
          Manage your Syllinse experience with ease.
        </p>

        {/* Login Button */}
        <a
          href={discordUrl}
          style={{
            display: "inline-block",
            padding: "12px 28px",
            backgroundColor: "#5865f2",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4752c4")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#5865f2")}
        >
          Login with Discord
        </a>

        {/* Options */}
        <div style={{ marginTop: "30px" }}>
          <a
            href="#"
            style={{
              display: "block",
              padding: "10px",
              margin: "10px auto",
              width: "80%",
              background: "#2f3136",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.2s",
              textAlign: "center",
            }}
            onMouseOver={(e) => (e.target.style.background = "#3a3d42")}
            onMouseOut={(e) => (e.target.style.background = "#2f3136")}
          >
            📊 Dashboard
          </a>

          <a
            href="#"
            style={{
              display: "block",
              padding: "10px",
              margin: "10px auto",
              width: "80%",
              background: "#2f3136",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.2s",
              textAlign: "center",
            }}
            onMouseOver={(e) => (e.target.style.background = "#3a3d42")}
            onMouseOut={(e) => (e.target.style.background = "#2f3136")}
          >
            ⚙️ Settings
          </a>

          <a
            href="#"
            style={{
              display: "block",
              padding: "10px",
              margin: "10px auto",
              width: "80%",
              background: "#2f3136",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.2s",
              textAlign: "center",
            }}
            onMouseOver={(e) => (e.target.style.background = "#3a3d42")}
            onMouseOut={(e) => (e.target.style.background = "#2f3136")}
          >
            📜 Scripts
          </a>
        </div>

        {/* Footer */}
        <footer style={{ marginTop: "20px", fontSize: "12px", color: "#72767d" }}>
          © 2025 Syllinse. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

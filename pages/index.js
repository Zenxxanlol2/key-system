export default function Home() {
  const clientId = "1418895386797674517";
  const redirectUri = encodeURIComponent(
    "https://site-4yp5.vercel.app/api/callback"
  );
  const discordUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=identify`;

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "Segoe UI, Arial, sans-serif", lineHeight: "1.6" }}>
      
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 60px", borderBottom: "1px solid #222" }}>
        <div style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "20px" }}>
          <img src="/syllinse.png" alt="Logo" style={{ width: "30px", marginRight: "10px" }} />
          Syllinse
        </div>
        <ul style={{ display: "flex", listStyle: "none", gap: "30px", margin: 0, padding: 0 }}>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Features</a></li>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>FAQ</a></li>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Executors</a></li>
          <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Download</a></li>
        </ul>
        <a href="#" style={{ padding: "10px 20px", background: "#fff", color: "#000", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>Dashboard</a>
      </nav>

      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>SYLLINSE</h1>
        <p style={{ fontSize: "18px", color: "#bbb", maxWidth: "600px", margin: "0 auto 40px auto" }}>
          Advanced Roblox script for <strong>Steal A Brainrot.</strong><br />
          Lightning fast. Safe. Community driven.
        </p>
        <div style={{ marginTop: "20px" }}>
          <a href="#" style={{ margin: "0 10px", padding: "12px 30px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", background: "#fff", color: "#000" }}>
            Get Key Now
          </a>
          <a href="#" style={{ margin: "0 10px", padding: "12px 30px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", border: "2px solid #fff", color: "#fff" }}>
            Watch Demo
          </a>
          <a href={discordUrl} style={{ margin: "0 10px", padding: "12px 30px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", background: "#5865f2", color: "#fff" }}>
            Login with Discord
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "60px 20px" }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "32px" }}>43</h2>
          <p style={{ color: "#bbb" }}>Active Users</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "32px" }}>100+</h2>
          <p style={{ color: "#bbb" }}>Premium Features</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "32px" }}>99.9%</h2>
          <p style={{ color: "#bbb" }}>Uptime</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "40px", color: "#555", borderTop: "1px solid #222" }}>
        © 2025 Syllinse. All rights reserved.
      </footer>
    </div>
  );
}

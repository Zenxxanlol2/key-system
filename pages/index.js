export default function Home() {
  const clientId = "1418895386797674517";
  const redirectUri = encodeURIComponent("https://site-4yp5.vercel.app/api/callback");
  const discordUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=identify`;

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/syllinse.png" alt="Logo" />
          Syllinse
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Executors</a></li>
          <li><a href="#">Download</a></li>
        </ul>
        <a href="#" className="dashboard-btn">Dashboard</a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>SYLLINSE</h1>
        <p>
          Advanced Roblox script for <strong>Steal A Brainrot.</strong><br />
          Lightning fast. Safe. Community driven.
        </p>
        <div className="btn-group">
          <a href="#" className="btn btn-primary">Get Key Now</a>
          <a href="#" className="btn btn-outline">Watch Demo</a>
          <a href={discordUrl} className="btn btn-discord">Login with Discord</a>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div>
          <h2>43</h2>
          <p>Active Users</p>
        </div>
        <div>
          <h2>100+</h2>
          <p>Premium Features</p>
        </div>
        <div>
          <h2>99.9%</h2>
          <p>Uptime</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        © 2025 Syllinse. All rights reserved.
      </footer>
    </div>
  );
}

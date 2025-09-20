export default function Home() {
  return (
    <div className="landing">
      <header>
        <img src="/syllinse.png" alt="Syllinse Logo" className="logo" />
        <h1>Syllinse Whitelist System</h1>
      </header>

      <main>
        <p>Manage your Roblox script whitelist easily with Discord login + HWID binding.</p>
        <div className="buttons">
          <a href="/api/callback">
            <button className="login-btn">Login with Discord</button>
          </a>
          <a href="/dashboard">
            <button className="dash-btn">Go to Dashboard</button>
          </a>
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Syllinse — All rights reserved.</p>
      </footer>

      <style jsx>{`
        .landing {
          background: #0d1117;
          color: #f0f6fc;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        header {
          text-align: center;
          margin-top: 60px;
        }
        .logo {
          width: 120px;
          height: auto;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 32px;
          font-weight: 700;
        }
        main {
          text-align: center;
          margin-top: 40px;
        }
        p {
          font-size: 18px;
          margin-bottom: 30px;
          color: #8b949e;
        }
        .buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        button {
          padding: 12px 24px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.2s;
        }
        .login-btn {
          background: #5865f2;
          color: white;
        }
        .login-btn:hover {
          background: #4752c4;
        }
        .dash-btn {
          background: #238636;
          color: white;
        }
        .dash-btn:hover {
          background: #196c2e;
        }
        footer {
          margin-bottom: 20px;
          font-size: 14px;
          color: #8b949e;
        }
      `}</style>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [whitelist, setWhitelist] = useState([]);

  useEffect(() => {
    fetch("/api/whitelist")
      .then((res) => res.json())
      .then((data) => setWhitelist(data));
  }, []);

  return (
    <div className="dashboard">
      <header>
        <img src="/logo.png" alt="Syllinse Logo" className="logo" />
        <h1>Syllinse Whitelist Dashboard</h1>
      </header>

      <main>
        {whitelist.length === 0 ? (
          <p>No users whitelisted yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Discord ID</th>
                <th>Username</th>
                <th>Device</th>
                <th>HWID</th>
              </tr>
            </thead>
            <tbody>
              {whitelist.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.discordId}</td>
                  <td>{entry.username || "Unknown"}</td>
                  <td>{entry.device || "N/A"}</td>
                  <td>{entry.hwid || "Not bound"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>

      <style jsx>{`
        .dashboard {
          background: #0d1117;
          color: #f0f6fc;
          min-height: 100vh;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        header {
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 2px solid #21262d;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }
        .logo {
          width: 50px;
          height: 50px;
        }
        h1 {
          font-size: 28px;
          font-weight: 600;
        }
        main {
          background: #161b22;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #30363d;
        }
        th {
          color: #58a6ff;
          font-weight: 600;
        }
        tr:hover {
          background: #21262d;
        }
      `}</style>
    </div>
  );
}

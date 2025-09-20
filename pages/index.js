import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch session data from API
    async function fetchUser() {
      try {
        const res = await fetch("/api/session");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user || null);
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className="dashboard">
      <header>
        <img src="/syllinse.png" alt="Syllinse Logo" className="logo" />
        <h1>Syllinse Dashboard</h1>
      </header>

      {!user ? (
        <div className="login-section">
          <p>Please log in with Discord to continue</p>
          <a href="/login">
            <button className="login-btn">Login with Discord</button>
          </a>
        </div>
      ) : (
        <div className="user-section">
          <img
            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
            alt="Avatar"
            className="avatar"
          />
          <h2>Welcome, {user.username}#{user.discriminator} 👋</h2>
          <p>Your Discord ID: {user.id}</p>
          <button
            className="logout-btn"
            onClick={() => {
              fetch("/api/logout").then(() => window.location.reload());
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

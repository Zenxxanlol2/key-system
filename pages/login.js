import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      "site-4yp5.vercel.app"
    );
    const scope = "identify";

    
    const loginUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;


    window.location.href = loginUrl;
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem", fontFamily: "Arial" }}>
      <h2>Redirecting to Discord...</h2>
    </div>
  );
}

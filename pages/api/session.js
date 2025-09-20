import cookie from "cookie";

export default function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || "");
  if (!cookies.user) {
    return res.status(200).json({ user: null });
  }

  try {
    const user = JSON.parse(cookies.user);
    res.status(200).json({ user });
  } catch (err) {
    res.status(200).json({ user: null });
  }
}

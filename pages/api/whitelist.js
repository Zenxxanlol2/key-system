import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const whitelistPath = path.join(process.cwd(), "whitelist.json");
  if (!fs.existsSync(whitelistPath)) {
    return res.status(200).json([]);
  }
  const whitelist = JSON.parse(fs.readFileSync(whitelistPath));
  res.status(200).json(whitelist);
}

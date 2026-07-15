import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import { contactRouter } from "./routes/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, ".env");
const loaded = dotenv.config({ path: envPath });

if (loaded.error) {
  console.warn(`[env] Could not load ${envPath}:`, loaded.error.message);
} else {
  console.log(`[env] Loaded ${Object.keys(loaded.parsed ?? {}).length} vars from server/.env`);
}

if (!process.env.CONTACT_TO_EMAIL?.trim()) {
  console.warn("[env] CONTACT_TO_EMAIL is missing — contact form emails will fail.");
}

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(cors({ origin: true }));
app.use(express.json({ limit: "32kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/contact", contactRouter);

app.listen(port, () => {
  console.log(`EstaMatch API listening on http://localhost:${port}`);
});

// Fonction serverless Vercel : pixel de suivi d'ouverture pour les audits envoyés.
// GET /api/track?e=<slug> — répond avec un GIF transparent 1x1 et logue l'événement
// (visible dans l'onglet "Logs" du dashboard Vercel). Pas de stockage, pas de webhook.

const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
  "base64"
);

export default function handler(req, res) {
  const slug = typeof req.query.e === "string" ? req.query.e : "inconnu";

  console.log(JSON.stringify({
    event: "audit_open",
    slug,
    ts: new Date().toISOString(),
  }));

  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(PIXEL);
}

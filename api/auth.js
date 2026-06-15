export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body || {};
  const correct = process.env.UPLOAD_PASSWORD;

  if (!correct) return res.status(500).json({ error: 'UPLOAD_PASSWORD env var not set.' });
  if (!password || password !== correct) return res.status(401).json({ error: 'Incorrect password.' });

  const token = Buffer.from(`${Date.now()}:${correct}`).toString('base64');
  return res.status(200).json({ token });
}

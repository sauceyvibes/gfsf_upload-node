module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const correct = process.env.UPLOAD_PASSWORD;

  if (!correct) {
    return res.status(500).json({ error: 'Password not configured on server.' });
  }

  if (!password || password !== correct) {
    return setTimeout(() => {
      res.status(401).json({ error: 'Incorrect password.' });
    }, 800);
  }

  const token = Buffer.from(`${Date.now()}:${correct}`).toString('base64');
  return res.status(200).json({ token });
};export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const correct = process.env.UPLOAD_PASSWORD;

  if (!correct) {
    return res.status(500).json({ error: 'Password not configured on server.' });
  }

  if (!password || password !== correct) {
    // Artificial delay to slow brute force attempts
    return setTimeout(() => {
      res.status(401).json({ error: 'Incorrect password.' });
    }, 800);
  }

  // Return a simple session token (timestamp + secret hash)
  // The client stores this and sends it back on future requests
  const token = Buffer.from(`${Date.now()}:${correct}`).toString('base64');
  return res.status(200).json({ token });
}

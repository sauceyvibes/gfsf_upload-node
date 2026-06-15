export default function handler(req, res) {
  const cloudName    = process.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    return res.status(500).json({ error: 'Cloudinary not configured.' });
  }

  return res.status(200).json({ cloudName, uploadPreset });
}
export default function handler(req, res) {
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const cloudName   = process.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    return res.status(500).json({ error: 'Cloudinary environment variables not configured.' });
  }

  // Never expose API secret — only cloud name + unsigned preset are needed for browser uploads
  return res.status(200).json({ cloudName, uploadPreset });
}

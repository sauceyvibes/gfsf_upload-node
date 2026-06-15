export default function handler(req, res) {
  const cloudName    = process.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    return res.status(500).json({ error: 'Cloudinary env vars not set.' });
  }

  return res.status(200).json({ cloudName, uploadPreset });
}

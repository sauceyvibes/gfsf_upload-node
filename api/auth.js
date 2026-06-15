module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const cloudName    = process.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    return res.status(500).json({ error: 'Cloudinary env vars not set.' });
  }

  return res.status(200).json({ cloudName, uploadPreset });
};

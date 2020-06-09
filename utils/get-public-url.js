const getPublicUrl = (bucket, filename) => (
  `https://${bucket}.storage.fleek.co/${filename}`
);

module.exports = getPublicUrl;

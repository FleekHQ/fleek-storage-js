const getPublicUrl = (bucket, filename) => (
  `https://storageapi.fleek.co/${bucket}/${filename}`
);

module.exports = getPublicUrl;

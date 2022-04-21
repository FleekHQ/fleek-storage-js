const getPublicUrl = (bucket, filename) => (
  `https://storageapi2.fleek.co/${bucket}/${filename}`
);

module.exports = getPublicUrl;

const axios = require('axios');
const CID = require('cids');

const { storageEndpoint } = require('../config');

const convertToV0CID = (v1) => {
  const formattedv1CID = v1.replace(/\"/g, '');
  const c = new CID(formattedv1CID);
  return c.toV0().toString();
};

const hashFromKey = async (bucket, filename) => {
  const url = `${storageEndpoint}/${bucket}/${filename}`

  try {
    const { headers: { etag: v1CID } } = await axios.head(url);
    const v0CID = convertToV0CID(v1CID);
    return v0CID;
  } catch(e) {
    return null;
  }
}

module.exports = hashFromKey;

const get = require('./methods/get');
const upload = require('./methods/upload');
const getFileFromHash = require('./methods/getFileFromHash');
const listBuckets = require('./methods/listBuckets');

// ***************************************************** 
// upload: Upload a file to Fleek Storage
// *****************************************************
// get: Get a file or related metadata from Fleek Storage
// *****************************************************
// getFileFromHash: Downloads a file from IPFS through Fleek's gateway
// *****************************************************
// listBuckets: Lists the user's buckets

const fleekJs = {
  upload,
  get,
  getFileFromHash,
  listBuckets,
  // TODO: listFiles
};

module.exports = fleekJs;

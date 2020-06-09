const get = require('./methods/get');
const upload = require('./methods/upload');
const getFileFromHash = require('./methods/getFileFromHash');

// ***************************************************** 
// Upload: Upload a file to Fleek Storage
// *****************************************************
// Get: Get a file or related metadata from Fleek Storage
// *****************************************************
// getFileFromHash: Downloads a file from IPFS through Fleek's gateway

const fleekJs = {
  upload,
  get,
  getFileFromHash,
  // TODO: listFiles
  // TODO: listBuckets
};

module.exports = fleekJs;

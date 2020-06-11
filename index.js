const get = require('./methods/get');
const upload = require('./methods/upload');
const getFileFromHash = require('./methods/getFileFromHash');
const listBuckets = require('./methods/listBuckets');
const listFiles = require('./methods/listFiles');

//
// ***************************************************** 
// upload: Upload a file to Fleek Storage
// *****************************************************
// get: Get a file or related metadata from Fleek Storage
// *****************************************************
// getFileFromHash: Downloads a file from IPFS through Fleek's gateway
// *****************************************************
// listBuckets: Lists the user's buckets
// *****************************************************
// listFiles: Lists files in a bucket
// *****************************************************
//

const fleekJs = {
  upload,
  get,
  getFileFromHash,
  listBuckets,
  listFiles,
};

module.exports = fleekJs;

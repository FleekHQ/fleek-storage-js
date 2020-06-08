const get = require('./methods/get');
const upload = require('./methods/upload');

const fleekJs = {
  upload,
  get,
  // TODO: downloadFileFromHash
  // TODO: listFiles
  // TODO: listBuckets
};

module.exports = fleekJs;

const get = require('./methods/get');
const upload = require('./methods/upload');
const getFileFromHash = require('./methods/getFileFromHash');

const fleekJs = {
  upload,
  get,
  getFileFromHash,
  // TODO: listFiles
  // TODO: listBuckets
};

module.exports = fleekJs;

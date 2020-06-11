const axios = require('axios').default;
const { ipfsGateway } = require('../config');

const getFileFromHash = async ({
  hash,
}) => {
  if(!hash) {
    throw 'No hash was given';
  }

  const params = {
    method: 'get',
    url: `${ipfsGateway}/${hash}`,
  };

  try {
    const response = await axios(params);

    return response.data;
  } catch(e) {
    throw e;
  }
};

module.exports = getFileFromHash;

const axios = require('axios').default;

const getFileFromHash = async ({
  hash,
}) => {
  if(!hash) {
    throw 'No hash was given';
  }

  const params = {
    method: 'get',
    url: `https://ipfs.fleek.co/ipfs/${hash}`,
  };

  try {
    const response = await axios(params);

    return response.data;
  } catch(e) {
    throw e;
  }
};

module.exports = getFileFromHash;

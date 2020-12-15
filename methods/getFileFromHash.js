const axios = require('axios').default;
const { ipfsGateway } = require('../config');
const { GET_FILE_FROM_HASH_OPTIONS } = require('../utils/constants');

const getFileFromHash = async ({
  hash,
  getFileFromHashOptions = [],
}) => {
  if(!hash) {
    throw 'No hash was given';
  }

  // validate getOptions
  let invalidOption;
  const validOptions = Object.keys(GET_FILE_FROM_HASH_OPTIONS).map(optionKey => GET_FILE_FROM_HASH_OPTIONS[optionKey])
  getFileFromHashOptions.forEach(option => {
    if (!validOptions.includes(option)){
      invalidOption = option;
    }
  })

  if (invalidOption) {
    throw `Invalid option ${invalidOption}`;
  }

  const params = {
    method: 'get',
    url: `${ipfsGateway}/${hash}`,
  };

  if(getFileFromHashOptions.includes(GET_FILE_FROM_HASH_OPTIONS.BUFFER)) {
    params.responseType = 'arraybuffer'
 }

  try {
    const response = await axios(params);

    return response.data;
  } catch(e) {
    throw e;
  }
};

module.exports = getFileFromHash;

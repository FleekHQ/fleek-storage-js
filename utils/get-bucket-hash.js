const axios = require('axios').default;
const { infoApi } = require('../config');

const hashFromKey = async (bucket) => {
  const url = `${infoApi}?bucket=${bucket}`

  const params = {
    method: 'get',
    url,
  };

  try {
    const response = await axios(params);
    return response.data.hash;
  } catch(e) {
    return null;
  }
}

module.exports = hashFromKey;

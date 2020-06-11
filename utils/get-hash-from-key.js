const axios = require('axios').default;
const { infoApi } = require('../config');

const hashFromKey = async (bucket, filename) => {
  const url = `${infoApi}?bucket=${bucket}&object=${filename}&objectDataOnly=true`

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

const axios = require('axios').default;

const hashFromKey = async (bucket) => {
  const url = `http://52.13.24.153:8889/info?bucket=${bucket}`

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

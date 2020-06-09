const hashFromKey = async (bucket, filename) => {
  const url = `52.13.24.153:8889/info?bucket=${bucket}&object=${filename}&objectDataOnly=true`

  const params = {
    method: 'get',
    url,
  };

  try {
    const response = await axios(params);

    return response.data.hash;
  } catch(e) {
    throw e;
  }

}

module.exports = hashFromKey;

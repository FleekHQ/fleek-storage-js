const axios = require('axios').default;
const { fleekGraphQl } = require('../config');

const hashFromKey = async (bucket) => {

  const params = {
    method: 'post',
    url: fleekGraphQl,
    data: {
      query: `
        query getBucketBySlug($slug: String!) {
          getBucketBySlug(slug: $slug) {
            hash
          }
        }
      `,
      variables: {
        slug: bucket,
      }
    },
  };

  try {
    const response = await axios(params);
    return response.data.hash;
  } catch(e) {
    return null;
  }
}

module.exports = hashFromKey;

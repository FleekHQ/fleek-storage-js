const initS3 = require('../utils/init-s3');
const getBucketList = require('../utils/get-bucket-list');
// const getBucketHash = require('../utils/get-bucket-hash');

const listBuckets = async ({
  apiKey,
  apiSecret,
}) => {
  try {
    const s3 = initS3(
      apiKey,
      apiSecret,
    );

    const buckets = await getBucketList(s3);

    const promises = buckets.map( async(bucket, index) => {
      // const hash = await getBucketHash(bucket);

      return ({
        name: bucket,
        // hash,
      })
    });

    return Promise.all(promises);

  } catch(error) {
    throw error;
  }
};

module.exports = listBuckets;

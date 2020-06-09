const initS3 = require('../utils/init-s3');
const getBucketList = require('../utils/get-bucket-list');
const getBucketHash = require('../utils/get-bucket-hash');

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

    const promises = buckets.map(bucket => getBucketHash(bucket));

    const hashes = await Promise.all(promises);

    const returnData = buckets.map((bucket, index) => ({
      name: bucket,
      hash: hashes[index],
    }));

    return returnData;

  } catch(error) {
    throw error;
  }
};

module.exports = listBuckets;

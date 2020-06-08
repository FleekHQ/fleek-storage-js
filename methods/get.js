const initS3 = require('../utils/init-s3');

const get = async ({
  apiKey,
  apiSecret,
}) => {
  const s3 = initS3(
    apiKey,
    apiSecret,
  );

  if (!data) {
    throw 'No file to upload';
  }

  if (!key) {
    throw 'No file key was specified'
  }

  let bucketName = bucket;
  
  if (!bucket) {
    try {
      bucket = await getBucket(s3);
    } catch(error) {
      throw error;
    }
  }

  return s3;
};

module.exports = get;

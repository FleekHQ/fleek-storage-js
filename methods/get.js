const initS3 = require('../utils/init-s3');
const getBucket = require('../utils/get-bucket');
const getFile = require('../utils/get-file');

const get = async ({
  apiKey,
  apiSecret,
  key,
  bucket,
}) => {
  let s3;
  try {
    s3 = initS3(
      apiKey,
      apiSecret,
    );
  } catch(error) {
    throw error;
  }

  if (!key) {
    throw 'No file key was specified'
  }

  let bucketName = bucket;
  
  if (!bucket) {
    try {
      bucketName = await getBucket(s3);
    } catch(error) {
      throw error;
    }
  }

  try {
    const params = {
      Bucket: bucketName,
      Key: key,
    };

    const data = await getFile(s3, params);
    return data;
  } catch(error) {
    throw error;
  }

};

module.exports = get;

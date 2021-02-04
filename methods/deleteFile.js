const initS3 = require('../utils/init-s3');
const getBucket = require('../utils/get-bucket');
const deleteObject = require('../utils/delete-object');

const deleteFile = async ({
  apiKey,
  apiSecret,
  key,
  bucket,
}) => {
  try {
    const s3 = initS3(
      apiKey,
      apiSecret,
    );

    if (!key) {
      throw 'No file key was specified'
    }

    let bucketName = bucket;
    
    if (!bucketName) {
      bucketName = await getBucket(s3);
    }

    const params = {
      Bucket: bucketName,
      Key: key,
    };

    const result = await deleteObject(s3, params);

    const returnData = {
      bucket: result.Bucket,
      key: result.Key,
    };

    return returnData;
  } catch(error) {
    throw error;
  }
};

module.exports = deleteFile;

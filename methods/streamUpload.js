const initS3 = require('../utils/init-s3');
const getBucket = require('../utils/get-bucket');
const streamUploadFile = require('../utils/stream-upload');
const getPublicUrl = require('../utils/get-public-url');

const streamUpload = async ({
  apiKey,
  apiSecret,
  stream,
  key,
  bucket,
}) => {
  try {
    const s3 = initS3(
      apiKey,
      apiSecret,
    );

    if (!stream) {
      throw 'No file to upload';
    }

    if (!key) {
      throw 'No file key was specified'
    }

    let bucketName = bucket;
    
    if (!bucketName) {
      bucketName = await getBucket(s3);
    }

    const params = {
      bucket: bucketName,
      objectName: key,
      stream,
    };

    const result = await streamUploadFile(s3, params);

    const returnData = {
      key,
      bucket: bucketName,
      publicUrl: getPublicUrl(bucketName, key),
      hash: result.hash,
      hashV0: result.hashV0,
    };

    return returnData;
  } catch(error) {
    throw error;
  }
};

module.exports = streamUpload;

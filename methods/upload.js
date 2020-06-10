const initS3 = require('../utils/init-s3');
const getBucket = require('../utils/get-bucket');
const uploadFile = require('../utils/upload-file');
const getPublicUrl = require('../utils/get-public-url');

const upload = async ({
  apiKey,
  apiSecret,
  data,
  key,
  bucket,
}) => {
  try {
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
    
    if (!bucketName) {
      bucketName = await getBucket(s3);
    }

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: data,
      ACL: 'public-read',
    };

    const result = await uploadFile(s3, params);

    const returnData = {
      hash: result.hash,
      hashV0: result.hashV0,
      key,
      bucket: bucketName,
      publicUrl: getPublicUrl(bucketName, key),
    };

    return returnData;
  } catch(error) {
    throw error;
  }
};

module.exports = upload;

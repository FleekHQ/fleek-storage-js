const initS3 = require('../utils/init-s3');
const getBucket = require('../utils/get-bucket');
const uploadFile = require('../utils/upload-file');

const upload = async ({
  apiKey,
  apiSecret,
  data,
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

  if (!data) {
    throw 'No file to upload';
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

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: data,
    ACL: 'public-read',
  };

  try {
    const result = await uploadFile(s3, params);
    return result;
  } catch(error) {
    throw error;
  }
};

module.exports = upload;

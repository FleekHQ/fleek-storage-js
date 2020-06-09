const initS3 = require('../utils/init-s3');
const getBucket = require('../utils/get-bucket');
const getFile = require('../utils/get-file');
const { GET_OPTIONS } = require('../utils/constants');

const get = async ({
  apiKey,
  apiSecret,
  key,
  bucket,
  getOptions = [GET_OPTIONS.DATA],
}) => {

  let returnData = {};
  let s3;

  if (getOptions.length === 0) {
    throw 'No Options specified'
  }

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
    returnData.data = data;
  } catch(error) {
    throw error;
  }

  return returnData;
};

module.exports = get;

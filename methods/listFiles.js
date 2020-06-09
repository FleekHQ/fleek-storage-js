const initS3 = require('../utils/init-s3');
const getBucket = require('../utils/get-bucket');
const getFileList = require('../utils/get-file-list');
const getHashFromKey = require('../utils/get-hash-from-key');
const getPublicUrl = require('../utils/get-public-url');

const listFiles = async ({
  apiKey,
  apiSecret,
  bucket,
}) => {
  let bucketName = bucket;
  let s3;
  try {
    s3 = initS3(
      apiKey,
      apiSecret,
    );
  } catch(error) {
    throw error;
  }

  if (!bucketName) {
    try {
      bucketName = await getBucket(s3);
    } catch(error) {
      throw error;
    }
  }

  let files;
  try {
    files = await getFileList(s3, bucketName);

    const promises = files.map(key => getHashFromKey(bucketName, key))

    const hashes = await Promise.all(promises);

    const returnData = files.map((key, index) => ({
      key,
      bucket: bucketName,
      hash: hashes[index],
      publicUrl: getPublicUrl(bucketName, key),
    }));

    return returnData;
  } catch(e) {
    throw e;
  }
};

module.exports = listFiles;

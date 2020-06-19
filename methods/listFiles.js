const initS3 = require('../utils/init-s3');
const getBucket = require('../utils/get-bucket');
const getFileList = require('../utils/get-file-list');
const getHashFromKey = require('../utils/get-hash-from-key');
const getPublicUrl = require('../utils/get-public-url');
const { GET_OPTIONS } = require('../utils/constants');

const listFiles = async ({
  apiKey,
  apiSecret,
  bucket = null,
  getOptions = [GET_OPTIONS.KEY, GET_OPTIONS.BUCKET, GET_OPTIONS.PUBLIC_URL],
}) => {
  const possibleGetOptions = [
    GET_OPTIONS.KEY,
    GET_OPTIONS.BUCKET,
    GET_OPTIONS.HASH,
    GET_OPTIONS.PUBLIC_URL,
  ];

  if (getOptions.length === 0) {
    throw 'No getOptions have been specified';
  }

  let wrongGetOption = getOptions.forEach(option => {
    if (!possibleGetOptions.includes(option)) {
      wrongGetOption = option;
    }
  })

  if(wrongGetOption) {
    throw 'Unacceptable getOptions parameter';
  }

  try {
    const s3 = initS3(
      apiKey,
      apiSecret,
    );

    let bucketName = bucket;
    if (!bucketName) {
      bucketName = await getBucket(s3);
    }

    const files = await getFileList(s3, bucketName);

    const promises = files.map(async (key, index) => {
      if (getOptions.includes(GET_OPTIONS.HASH)) {
        hash = await getHashFromKey(bucketName, key);
      }

      return ({
        ...(getOptions.includes(GET_OPTIONS.KEY) && { key }),
        ...(getOptions.includes(GET_OPTIONS.BUCKET) && { bucket: bucketName }),
        ...(getOptions.includes(GET_OPTIONS.HASH) && { hash }),
        ...(getOptions.includes(GET_OPTIONS.PUBLIC_URL) && { publicUrl: getPublicUrl(bucketName, key) }),
      });
    });

    return Promise.all(promises);
  } catch(e) {
    throw e;
  }
};

module.exports = listFiles;

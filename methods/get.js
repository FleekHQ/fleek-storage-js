const initS3 = require('../utils/init-s3');
const getBucket = require('../utils/get-bucket');
const getFile = require('../utils/get-file');
const getHashFromKey = require('../utils/get-hash-from-key');
const getPublicUrl = require('../utils/get-public-url');
const { GET_OPTIONS } = require('../utils/constants');

const get = async ({
  apiKey,
  apiSecret,
  key,
  bucket,
  getOptions = [GET_OPTIONS.DATA],
}) => {
  const fileData = {
    [GET_OPTIONS.KEY]: key,
    [GET_OPTIONS.BUCKET]: bucket,
  };

  // validate getOptions
  let invalidOption;
  const validOptions = Object.keys(GET_OPTIONS).map(optionKey => GET_OPTIONS[optionKey])
  getOptions.forEach(option => {
    if (!validOptions.includes(option)){
      invalidOption = option;
    }
  })

  if (invalidOption) {
    throw `Invalid option ${invalidOption}`;
  }

  if (getOptions.length === 0) {
    throw 'No Options specified'
  }

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
  
  if (!fileData[GET_OPTIONS.BUCKET]) {
    try {
      fileData[GET_OPTIONS.BUCKET] = await getBucket(s3);
    } catch(error) {
      throw error;
    }
  }
  
  if(getOptions.includes(GET_OPTIONS.PUBLIC_URL)) {
     const publicUrl = getPublicUrl(
      fileData[GET_OPTIONS.BUCKET], fileData[GET_OPTIONS.KEY]
    );
    fileData[GET_OPTIONS.PUBLIC_URL] = publicUrl;
  }

  if(getOptions.includes(GET_OPTIONS.HASH)) {
    try {
      fileData[GET_OPTIONS.HASH] = await getHashFromKey(fileData[GET_OPTIONS.BUCKET], fileData[GET_OPTIONS.KEY]);
    } catch(error) {
      throw error;
    }
  }

  if (getOptions.includes(GET_OPTIONS.DATA)) {
    try {
      const params = {
        Bucket: fileData[GET_OPTIONS.BUCKET],
        Key: fileData[GET_OPTIONS.KEY],
      };
  
      const data = await getFile(s3, params);
      fileData[GET_OPTIONS.DATA] = data;
    } catch(error) {
      throw error;
    }
  }

  const returnData = {};
  getOptions.forEach(option => {
    returnData[option] = fileData[option]
  });

  return returnData;
};

module.exports = get;

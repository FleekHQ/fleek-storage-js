const AWS = require('aws-sdk');
const { storageEndpoint } = require('../config');

const initS3 = (apiKey, apiSecret) => {
  if (!apiKey || !apiSecret) {
    throw new Error("Missing Fleek credentials.");
  }

  const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    accessKeyId: apiKey,
    secretAccessKey: apiSecret,
    endpoint: storageEndpoint,
    region: 'us-east-1',
    s3ForcePathStyle: true
  });

  return s3;
};

module.exports = initS3;

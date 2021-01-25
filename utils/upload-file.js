const uploadFile = async (s3, params) => {
  const { ETag } = await s3.putObject(params).promise();
  const hash = ETag.replace(/^"|"$/g, '');

  // hashv0 is actually no longer supported
  return { hash, hashV0: hash };
};

module.exports = uploadFile;

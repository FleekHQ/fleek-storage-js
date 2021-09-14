const { CID } = require('multiformats');

const uploadFile = async (s3, params) => {
  const { ETag } = await s3.putObject(params).promise();
  const hash = ETag.replace(/^"|"$/g, '');

  const cidObj = CID.parse(hash);

  let cidv0;

  const cidv1 = cidObj.toV1().toString();

  try {
    cidv0 = cidObj.toV0().toString();
  } catch (e) {
    // fallback when cbor is used
    cidv0 = cidv1;
  }

  return { hash: cidv1, hashV0: cidv0 };
};

module.exports = uploadFile;

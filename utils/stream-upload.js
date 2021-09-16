const { CID } = require('multiformats');
const Uploader = require('s3-streaming-upload').Uploader;

const streamUploadFile = (s3, params) => (new Promise((resolve, reject) => {
  const request = new Uploader({
    service: s3,
    objectParams: {
      ACL: 'public-read',
    },
    ...params,
  });

  request.send((err, data) => {
    if (err) {
      reject(err);
    }
    const { ETag } = data;

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

    resolve ({ hash: cidv1, hashV0: cidv0 });
  });
}));

module.exports = streamUploadFile;

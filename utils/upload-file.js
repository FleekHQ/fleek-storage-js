const { CID } = require('multiformats');


const uploadFile = (s3, params, cb = () => {}) => (new Promise((resolve, reject) => {
  const request = s3.putObject(params);

  request.on('complete', (response) => {
    try {
      const { data: { ETag } } = response;

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
    } catch (e) {
      reject(e);
    }
  });

  request.on('error', (error) => {
    reject(error);
  });

  request.on('httpUploadProgress', (event) => {
    cb(event);
  });

  request.send();
}));

module.exports = uploadFile;

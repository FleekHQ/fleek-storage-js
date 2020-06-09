const uploadFile = (s3, params) => new Promise((resolve, reject) => {
  const request = s3.putObject(params);
  request
    .on('success', (response) => {
      const hash = response.httpResponse.headers['x-fleek-ipfs-hash'];
      const hashV0 = response.httpResponse.headers['x-fleek-ipfs-hash-v0'];

      resolve ({
        hash,
        hashV0,
      });
    })
    .on('error', error => {
      reject(error);
    })
    .send();
});

module.exports = uploadFile;

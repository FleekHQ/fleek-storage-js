const getFile = (s3, params) => new Promise((resolve, reject) => {
  const request = s3.getObject(params);
  request
    .on('success', (response) => {
      resolve (response.data.Body);
    })
    .on('error', error => {
      reject(error);
    })
    .send();
});

module.exports = getFile;

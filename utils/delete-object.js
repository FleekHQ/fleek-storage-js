const deleteObject = (s3, params) => new Promise((resolve, reject) => {
  s3.deleteObject(params, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve({
        ...params
      });
    }
  });
});

module.exports = deleteObject;

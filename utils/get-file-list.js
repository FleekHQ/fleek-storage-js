const getFileList = (s3, bucket) => new Promise((resolve, reject) => {
  const params = {
    Bucket: bucket,
  };

  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data.Contents.map(file => file.Key));
    }
  });
});

module.exports = getFileList;

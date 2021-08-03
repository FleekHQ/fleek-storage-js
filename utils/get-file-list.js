const getFileList = (s3, bucket, prefix) => new Promise((resolve, reject) => {
  const params = {
    Bucket: bucket,
    Prefix: prefix,
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

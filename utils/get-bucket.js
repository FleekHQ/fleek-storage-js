const getBucket = (s3) => new Promise((resolve, reject) => {
  s3.listBuckets((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data.Buckets[0].Name);
    }
  });
});

module.exports = getBucket;

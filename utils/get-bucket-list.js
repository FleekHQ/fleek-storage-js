const getBucketList = (s3) => new Promise((resolve, reject) => {
  s3.listBuckets((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data.Buckets.map(bucket => bucket.Name));
    }
  });
});

module.exports = getBucketList;

module.exports =  {
  S3: function () {
    this.listObjectsV2 = jest.fn((params, callback) => callback(null, {
      Contents: [
        { Key: 'file-1' },
        { Key: 'file-2' }
      ]
    }));

    this.listBuckets = jest.fn(callback => callback(null, {
      Buckets: [
        { Name: 'bucket-1' },
        { Name: 'bucket-2' },
      ],
    }));

    this.on = (value, callback) => {
      if (value === 'success') {
        callback({
          httpResponse: {
            headers: {
              'x-fleek-ipfs-hash': '123',
              'x-fleek-ipfs-hash-v0': '123-v0',
            }
          }
        })
      }
      return {
        on: this.on,
        send: () => {},
      };
    };

    this.putObject= () => ({
      on: this.on,
      send: () => {},
    })
  }
}

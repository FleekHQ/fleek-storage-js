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

    // putObject
    this.putObject = () => ({
      promise: () => Promise.resolve({ ETag: '"bafybeicaubxlzbr4sgc3tfwakfn7ganskxlgxmx25pdrcsojchgs3xpfqq"' }),
    });

    //getObject
    this.onGetObject = (value, callback) => {
      if (value === 'success') {
        callback({
          data: {
            Body: 'file-content'
          }
        })
      }
      return {
        on: this.onGetObject,
        send: () => {},
      };
    };

    this.getObject= () => ({
      on: this.onGetObject,
      send: () => {},
    })
  }
}

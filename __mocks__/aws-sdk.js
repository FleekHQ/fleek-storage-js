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

    this.deleteObject = jest.fn((params, callback) => callback(null, {
      bucket: params.bucket,
      key: params.key,
    }));

    // putObject
    this.putObject = () => ({
      promise: () => Promise.resolve({ ETag: '"bafybeicaubxlzbr4sgc3tfwakfn7ganskxlgxmx25pdrcsojchgs3xpfqq"' }),
      on: (event, cb) => {
        if( event === 'complete') {
          cb({
            data: {
              ETag: '"bafybeicaubxlzbr4sgc3tfwakfn7ganskxlgxmx25pdrcsojchgs3xpfqq"',
            }
          })
        }
      } 
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

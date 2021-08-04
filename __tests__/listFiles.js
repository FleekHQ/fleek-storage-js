
// const listFiles = require('../methods/listFiles');

it('returns a list of files', async () => {
  // const files = await listFiles({
  //   apiKey: '123',
  //   apiSecret: 'abc',
  //   getOptions: ['key', 'bucket', 'publicUrl', 'hash'],
  // });

  // const expectedResult = [
  //   {
  //     key: 'file-1',
  //     bucket: 'bucket-1',
  //     hash: '123',
  //     publicUrl: 'https://storageapi.fleek.co/bucket-1/file-1'
  //   },
  //   {
  //     key: 'file-2',
  //     bucket: 'bucket-1',
  //     hash: '123',
  //     publicUrl: 'https://storageapi.fleek.co/bucket-1/file-2'
  //   }
  // ];

  // expect(files).toEqual(expectedResult);
});

it('returns a list of files nested in a folder', async () => {
    // const files = await listFiles({
    //   apiKey: '123',
    //   apiSecret: 'abc',
    //   prefix: 'folder',
    //   getOptions: ['key', 'bucket', 'publicUrl', 'hash'],
    // });

    // const expectedResult = [
    //   {
    //     key: 'folder/file-3',
    //     bucket: 'bucket-1',
    //     hash: '123',
    //     publicUrl: 'https://storageapi.fleek.co/bucket-1/folder/file-3'
    //   },
    //   {
    //     key: 'folder/file-4',
    //     bucket: 'bucket-1',
    //     hash: '123',
    //     publicUrl: 'https://storageapi.fleek.co/bucket-1/folder/file-4'
    //   }
    // ];

    // expect(files).toEqual(expectedResult);
})

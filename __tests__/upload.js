
const upload = require('../methods/upload');

it('uploads a file', async () => {
  const file = await upload({
    apiKey: '123',
    apiSecret: 'abc',
    data: 'file-data',
    key: 'my-file',
  });

  const expectedResult = {
    "bucket": "bucket-1",
    "hash": "123",
    "hashV0": "123-v0",
    "key": "my-file",
    "publicUrl": "https://storageapi.fleek.co/bucket-1/my-file"
  };

  expect(file).toEqual(expectedResult);
});


const listFiles = require('../methods/listFiles');

it('returns a list of files', async () => {
  const files = await listFiles({
    apiKey: '123',
    apiSecret: 'abc',
    getOptions: ['key', 'bucket', 'publicUrl', 'hash'],
  });

  const expectedResult = [
    {
      key: 'file-1',
      bucket: 'bucket-1',
      hash: '123',
      publicUrl: 'https://bucket-1.storage.fleek.co/file-1'
    },
    {
      key: 'file-2',
      bucket: 'bucket-1',
      hash: '123',
      publicUrl: 'https://bucket-1.storage.fleek.co/file-2'
    }
  ];

  expect(files).toEqual(expectedResult);
});

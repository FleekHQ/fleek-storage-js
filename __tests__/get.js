
const get = require('../methods/get');

it('gets a file', async () => {
  const file = await get({
    apiKey: '123',
    apiSecret: 'abc',
    key: 'my-file',
    getOptions: ['data', 'key', 'hash', 'publicUrl']
  });

  const expectedResult = 
  {
    data: 'file-content',
    key: 'my-file',
    hash: '123',
    publicUrl: 'https://bucket-1.storage.fleek.co/my-file'
  };

  expect(file).toEqual(expectedResult);
});

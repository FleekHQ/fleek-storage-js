
const get = require('../methods/get');

it('gets a file', async () => {
  const file = await get({
    apiKey: '123',
    apiSecret: 'abc',
    key: 'my-file'
  });

  const expectedResult = {"data": "file-content"};

  expect(file).toEqual(expectedResult);
});

const deleteFile = require('../methods/deleteFile');

it('deletes a file', async () => {
  const response = await deleteFile({
    apiKey: '123',
    apiSecret: 'abc',
    bucket: 'my-bucket',
    key: 'my-file',
  });

  const expectedResult = {
    bucket: "my-bucket",
    key: "my-file",
  };

  expect(response).toEqual(expectedResult);
});

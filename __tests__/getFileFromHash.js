const axios = require('axios');
const getFileFromHash = require('../methods/getFileFromHash');

it('returns the data of a file', async () => {
  axios.default.mockImplementationOnce(() =>  Promise.resolve({
      data: 'file-content',
    }))

  const fileData = await getFileFromHash({
    hash: '123',
  });

  expect(fileData).toEqual('file-content');
});

const axios = require('axios');
const getFileFromHash = require('../methods/getFileFromHash');
const cfg = require('../config');

it('returns the data of a file', async () => {
  axios.default.mockImplementationOnce(() =>  Promise.resolve({
      data: 'file-content',
    }))

  const fileData = await getFileFromHash({
    hash: '123',
  });

  expect(fileData).toEqual('file-content');
});

it('returns the data of a file using buffer type', async () => {
  axios.default.mockImplementationOnce(() =>  Promise.resolve({
      data: 'file-content',
    }))

  const hash = '123'

  const fileData = await getFileFromHash({
    hash,
    getFileFromHashOptions: [
      'buffer'
    ]
  });

  expect(fileData).toEqual('file-content');

  expect(axios.default).toHaveBeenCalledWith({
    method: 'get',
    url: `${cfg.ipfsGateway}/${hash}`,
    responseType: 'arraybuffer'
  });
});
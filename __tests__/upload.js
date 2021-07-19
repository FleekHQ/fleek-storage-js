// make these available during the tests
global.TextDecoder = require('util').TextDecoder
global.TextEncoder = require('util').TextEncoder

const upload = require('../methods/upload');

it('uploads a file', async () => {
  const file = await upload({
    apiKey: '123',
    apiSecret: 'abc',
    data: 'file-data',
    key: 'my-file',
  });

  const expectedResult = {
    'bucket': 'bucket-1',
    'hash': 'bafybeicaubxlzbr4sgc3tfwakfn7ganskxlgxmx25pdrcsojchgs3xpfqq',
    'hashV0': 'QmSgvgwxZGaBLqkGyWemEDqikCqU52XxsYLKtdy3vGZ8uq',
    'key': 'my-file',
    'publicUrl': 'https://storageapi.fleek.co/bucket-1/my-file'
  };

  expect(file).toEqual(expectedResult);
});

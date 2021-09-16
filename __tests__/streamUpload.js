// make these available during the tests
global.TextDecoder = require('util').TextDecoder
global.TextEncoder = require('util').TextEncoder

const streamUpload = require('../methods/streamUpload');

it('uploads a file', async () => {
  const stream = Buffer.from('Hello world'); 

  const file = await streamUpload({
    apiKey: '123',
    apiSecret: 'abc',
    stream,
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

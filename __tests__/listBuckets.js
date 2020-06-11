
const listBuckets = require('../methods/listBuckets');

it('returns a list of buckets', async () => {
  const buckets = await listBuckets({
    apiKey: '123',
    apiSecret: 'abc',
  });

  const expectedResult = [
    {
      name: 'bucket-1',
      // hash: '123'
    },
    {
        name: 'bucket-2',
        // hash: '123'
    }
  ];

  expect(buckets).toEqual(expectedResult);
});

module.exports =  {
  default: jest.fn(() => Promise.resolve({
    data: {
      hash: '123',
    }
  ,})),
  head: jest.fn(() => Promise.resolve({
    headers: {
      etag: 'bafybeia2kv7mrnnj6b2lilniq4kjtr5ec5gsdlgiv2ak2q6eaj4ipbztga',
    }
  ,}))
}

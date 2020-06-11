module.exports =  {
  default: jest.fn(() => Promise.resolve({
    data: {
      hash: '123',
    }
  ,}))
}

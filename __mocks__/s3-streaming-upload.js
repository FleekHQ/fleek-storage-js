class Uploader {
  constructor() {}
  send(cb) {
    cb(undefined, {
      ETag: '"bafybeicaubxlzbr4sgc3tfwakfn7ganskxlgxmx25pdrcsojchgs3xpfqq"',
    });
  }
};

module.exports =  {
  Uploader,
}

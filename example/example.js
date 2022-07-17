const fleekStorage = require('../index');
const dotenv = require('dotenv');
const fs = require('fs');

(async () => {
  dotenv.config({path: './.env'});

  const apiKey = process.env.API_KEY;
  const apiSecret = process.env.API_SECRET;

  const files = await fleekStorage.listFiles({
    apiKey,
    apiSecret,
    prefix: '',
    getOptions: [
      'bucket',
      'key',
      'hash',
      'publicUrl'
    ],
  });

  console.log('files: ', files);

  const filePath = "./file1.txt";

  // fs.readFile(filePath, async (error, fileData) => {
  //   const uploadedFile = await fleekStorage.upload({
  //     apiKey,
  //     apiSecret,
  //     key: 'folderA/file1.txt',
  //     ContentType: 'text/plains',
  //     data: fileData,
  //     httpUploadProgressCallback: (event) => {
  //       console.log(Math.round(event.loaded/event.total*100)+ '% done');
  //     }
  //   });
  // })

  const filesagain = await fleekStorage.listFiles({
    apiKey,
    apiSecret,
    prefix: 'folderA',
    getOptions: [
      'bucket',
      'key',
      'hash',
      'publicUrl'
    ],
  });

  console.log('files again: ', filesagain);
} )();
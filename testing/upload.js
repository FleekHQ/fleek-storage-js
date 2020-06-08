// For testing the functions locally
const fs = require('fs');
const path = require('path');
const fleek = require('../index');   

const apiKey = process.env.FLEEK_API_KEY;
const apiSecret = process.env.FLEEK_API_SECRET;

const testFunctionUpload = async (data) => {
  const date = new Date();
  const timestamp = date.getTime();

  const input = {
    apiKey,
    apiSecret,
    key: `file-${timestamp}`,
    data,
  };

  try {
    const result = await fleek.upload(input);
    console.log(result);
  } catch(e) {
    console.log('error', e);
  }
}

const filePath = path.join(__dirname, '../README.md');

fs.readFile(filePath, (err, data) => {
  if(!err) {
    testFunctionUpload(data);
  }
})
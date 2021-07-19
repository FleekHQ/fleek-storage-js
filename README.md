# Fleek Storage Js
Fleek Storage Js is an SDK to interact with Fleek Storage.

# Installation
The package can be installed through npm.

`npm install @fleekhq/fleek-storage-js`

It can also be installed through yarn.

`yarn add @fleekhq/fleek-storage-js`

# Importing

The SDK can be imported using an `import` statement.

`import fleekStorage from '@fleekhq/fleek-storage-js'`

The SDK can also be imported using a `require`.

`const fleekStorage = require('@fleekhq/fleek-storage-js')`

# Getting Api Keys


The api key and secret can be generated on the [Fleek Web app](https://app.fleek.co) or from the [Fleek CLI](https://github.com/fleekhq/fleek-cli#readme).

See [Getting an Api Key](https://docs.fleek.co/StorageSDK/GettingApiKeys)

# Methods
## get
The `get` method is for fetching individual files, either the content or related data, such as the key, hash and publicUrl.

Example of usage:

```
const myFile = await fleekStorage.get({
  apiKey: 'my-key',
  apiSecret: 'my-secret',
  key: 'my-file-key',
  getOptions: [
    'data',
    'bucket',
    'key',
    'hash',
    'publicUrl'
  ],
})
```

### Input parameters of get

|param  	|type  	|description  	|
|-:	|-	|-	|
| apiKey 	| String 	|  The api key used for authentication	|
| apiSecret 	| String 	|  The api secret used for authentication	|
| key 	|  String	| The key identifying the requested file in the bucket  	|
| bucket 	| String, optional, defaults to the default account bucket 	|  The name of the bucket containing the file. A bucket is created by default with every Fleek account	|
| getOptions 	| Array, optional, defaults to ['data'] 	| An array specifying what type of information to retrieve concerning the file.	Possible values for the array includes `data`, `bucket`, `hash`, `key`, `publicUrl`|


## upload

The `upload` method uploads a file, identified by a key, to a bucket.
The function returns the hash of the file, the publicUrl, the key and the bucket.

Example of usage:

```
fs.readFile(filePath, async (error, fileData) => {
  const uploadedFile = await fleekStorage.upload({
    apiKey: 'my-key',
    apiSecret: 'my-secret',
    key: 'my-file-key',
    data: fileData,
  });
})


```

### Input parameters of upload

|param  	|type  	|description  	|
|-:	|-	|-	|
| apiKey 	| String 	|  The api key used for authentication	|
| apiSecret 	| String 	|  The api secret used for authentication	|
| key 	|  String	| The key identifying the requested file in the bucket  	|
| bucket 	| String, optional, defaults to the default account bucket 	|  The name of the bucket containing the file. A bucket is created by default with every Fleek account	|
| data 	| Any 	| The data of the file to be uploaded |

## deleteFile

The `deleteFile` method deletes a file, identified by its key and bucket.
The function returns the key and bucket of the deleted file if successful.
If the file does not exist, the method will still execute successfully.

Example of usage:

```
  await fleekStorage.deleteFile({
    apiKey: 'my-key',
    apiSecret: 'my-secret',
    key: 'my-file-key',
    bucket: 'my-bucket',
  });

```

### Input parameters of deleteFile

|param  	|type  	|description  	|
|-:	|-	|-	|
| apiKey 	| String 	|  The api key used for authentication	|
| apiSecret 	| String 	|  The api secret used for authentication	|
| key 	|  String	| The key identifying the file in the bucket  	|
| bucket 	| String, optional, defaults to the default account bucket 	|  The name of the bucket containing the file. A bucket is created by default with every Fleek account	|

## listFiles
The `listFiles` method is for fetching information about all files in a bucket such as the key, hash and publicUrl.

Example of usage:

```
const files = await fleekStorage.listFiles({
  apiKey: 'my-key',
  apiSecret: 'my-secret',
  getOptions: [
    'bucket',
    'key',
    'hash',
    'publicUrl'
  ],
})
```

### Input parameters of listFiles

|param  	|type  	|description  	|
|-:	|-	|-	|
| apiKey 	| String 	|  The api key used for authentication	|
| apiSecret 	| String 	|  The api secret used for authentication	|
| bucket 	| String, optional, defaults to the default account bucket 	|  The name of the bucket containing the file. A bucket is created by default with every Fleek account	|
| getOptions 	| Array, optional, defaults to ['key', 'bucket', 'publicUrl'] 	| An array specifying what type of information to retrieve concerning the file.	Possible values for the array includes `bucket`, `hash`, `key`, `publicUrl`|


## listBuckets
The `listBuckets` method returns an array of bucket names associated with the api key's account.

Example of usage:

```
const buckets = await fleekStorage.listBuckets({
  apiKey: 'my-key',
  apiSecret: 'my-secret',
})
```

### Input parameters of listBuckets

|param  	|type  	|description  	|
|-:	|-	|-	|
| apiKey 	| String 	|  The api key used for authentication	|
| apiSecret 	| String 	|  The api secret used for authentication	|


## getFileFromHash

`getFileFromHash` is a utility function that downloads a file's data from Fleek's IPFS gateway using the hash. The key and secret is not required since the gateway is publicly available.

Example of usage:

```
const myFile = await fleekStorage.getFileFromHash({
  hash: 'bafybeige4bhzjvrptn7fdz7mqgigzoczcliqpuo7km4jm7vgjg2pbmuhna',
  getFileFromHashOptions: [
    'buffer',
  ],
})
```

### Input parameters of getFileFromHash

|param  	|type  	|description  	|
|-:	|-	|-	|
| hash 	| String 	|  The hash of the requested file	|
| getFileFromHashOptions 	| Array, optional, defaults to [] 	| An array specifying additional options when it comes to fetching by hash. Possible values for the array includes `buffer` (this returns the whole file at once instead of chunks) |
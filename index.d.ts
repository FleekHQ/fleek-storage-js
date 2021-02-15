export interface uploadInput {
  apiKey: string,
  apiSecret: string,
  data: any,
  key: string,
  bucket?: string,
}

export interface uploadOutput {
  hash: string,
  hashV0: string,
  key: string,
  bucket: string,
  publicUrl: string,
}

export type uploadType = (input: uploadInput) => Promise<uploadOutput>;

export interface getFileFromHashInput {
  hash: string,
  getFileFromHashOptions?: string[],
}

// export enum getFileFromHashOptionsValues {
//   buffer = 'buffer',
// }

export enum getOptionsValues {
  data,
  bucket,
  hash,
  key,
  publicUrl,
}

export interface getInput {
  apiKey: string,
  apiSecret: string,
  key: string,
  bucket?: string,
  getOptions?: getOptionsValues[],
}

export interface getOutput {
  data?: any,
  bucket?: string,
  hash?: string,
  key?: string,
  publicUrl?: string,
}

export interface listBucketsInput {
  apiKey: string,
  apiSecret: string,
}

export interface listBucketsOutput {
  name: string,
}

export enum getOptionsListFiles {
  key,
  bucket,
  publicUrl,
  hash,
}

export interface listFilesInput {
  apiKey: string,
  apiSecret: string,
  bucket?: string,
  getOptions?: getOptionsListFiles[],
}

export interface listFilesOutput {
  key?: string,
  bucket?: string,
  publicUrl?: string,
  hash?: string,
}

export interface deleteFileInput {
  apiKey: string,
  apiSecret: string,
  bucket?: string,
  key: string,
}

export interface deleteFileOutput {
  key: string,
  bucket: string,
}

declare module "@fleekhq/fleek-storage-js" {
  export const upload: uploadType;
  export const get: (input: getInput) => Promise<getOutput>;
  export const getFileFromHash: (input: getFileFromHashInput) => Promise<any>;
  export const listBuckets: (input: listBucketsInput) => Promise<listBucketsOutput[]>;
  export const listFiles: (input: listFilesInput) => Promise<listFilesOutput[]>;
  export const deleteFile: (input: deleteFileInput) => Promise<deleteFileOutput>;
}

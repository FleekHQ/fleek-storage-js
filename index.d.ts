export interface uploadInput {
  apiKey: string,
  apiSecret: string,
  data: any,
  key: string,
  bucket?: string,
};

export interface uploadOutput {
  hash: string,
  hashV0: string,
  key: string,
  bucket: string,
  publicUrl: string,
}

export type uploadType = (input: uploadInput) => uploadOutput;

export interface getFileFromHashInput {
  hash: string,
}

export type getFileFromHashType = (input: getFileFromHashInput) => any;

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

export type getType = (input: getInput) => getOutput;

export interface listBucketsInput {
  apiKey: string,
  apiSecret: string,
}

export interface listBucketsOutput {
  name: string,
}

export type listBucketsType = (input: listBucketsInput) => listBucketsOutput[];

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
  getOptions?: getOptionsListFiles,
}

export interface listFilesOutput {
  key?: string,
  bucket?: string,
  publicUrl?: string,
  hash?: string,
}

export type listFilesType = (input: listFilesInput) => listFilesOutput[];

export interface fleekJsMethods {
  upload: uploadType,
  get: getType,
  getFileFromHash: getFileFromHashType,
  listBuckets: listBucketsType,
  listFiles: listFilesType,
}

declare const fleekJs: fleekJsMethods;

export default fleekJs;
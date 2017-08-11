declare module "axios-mock-adapter" {
  
  import { AxiosStatic, AxiosRequestConfig, AxiosPromise, AxiosAdapter } from 'axios';

  export class MockAdapter {
    constructor(axios?: AxiosStatic, config?: MockAdapter.IMockConfig);

    someProperty: string[];

    restore(): void;
    reset(): void;
    passThrough(): void;
    adapter(): AxiosAdapter;

    reply(func: (config: AxiosRequestConfig) => MockAdapter.MockResponse | AxiosPromise): MockAdapter;
    reply(status: number, data?: any): MockAdapter;

    replyOnce(func: (config: AxiosRequestConfig) => MockAdapter.MockResponse | AxiosPromise): MockAdapter;
    replyOnce(status: number, data?: any): MockAdapter;

    onGet: MockAdapter.defaultVerb;
    onPost: MockAdapter.defaultVerb;
    onPut: MockAdapter.defaultVerb;
    onHead: MockAdapter.defaultVerb;
    onDelete: MockAdapter.defaultVerb;
    onPatch: MockAdapter.defaultVerb;
  }

  export namespace MockAdapter {
    export type MockResponse = [number, any, any];
    export interface IMockConfig { delayResponse: number }

    interface defaultVerb { (path?: string | RegExp, body?: any): MockAdapter }
  }

  export default MockAdapter;
}

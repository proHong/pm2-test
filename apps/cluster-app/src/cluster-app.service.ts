import { Injectable } from '@nestjs/common';

@Injectable()
export class ClusterAppService {
  wait = (time) => {
    return new Promise(async (resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  async getHello(): Promise<string> {
    await this.wait(2000);
    console.log('Hello', process.env.INSTANCE_ID);
    return `Hello World! ${process.env.INSTANCE_ID}`;
  }
}

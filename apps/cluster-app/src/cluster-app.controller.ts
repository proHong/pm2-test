import { Controller, Get } from '@nestjs/common';
import { ClusterAppService } from './cluster-app.service';

@Controller()
export class ClusterAppController {
  constructor(private readonly clusterAppService: ClusterAppService) {}

  @Get()
  async getHello(): Promise<string> {
    const result = await this.clusterAppService.getHello();
    return result;
  }

  @Get('/error')
  async makeErr(): Promise<string> {
    throw new Error(
      'error test \n error message is missing from cluster app service \n',
    );
    return '';
  }
}

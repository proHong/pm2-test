import { Controller, Get } from '@nestjs/common';
import { LoggingAppService } from './logging-app.service';

@Controller()
export class LoggingAppController {
  constructor(private readonly loggingAppService: LoggingAppService) {}

  @Get()
  getHello(): string {
    return this.loggingAppService.getHello();
  }
}

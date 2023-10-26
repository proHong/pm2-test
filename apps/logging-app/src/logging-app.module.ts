import { Module } from '@nestjs/common';
import { LoggingAppController } from './logging-app.controller';
import { LoggingAppService } from './logging-app.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [LoggingAppController],
  providers: [LoggingAppService],
  exports: [LoggingAppService],
})
export class LoggingAppModule {}

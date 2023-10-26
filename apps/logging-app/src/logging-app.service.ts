import { Injectable } from '@nestjs/common';
import { CronJob } from 'cron';
import { CronExpression, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class LoggingAppService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  getHello(): string {
    return 'Hello World!';
  }
  private tick = async () => {
    console.log('Ticking', process.env.INSTANCE_ID);
  };
  public init = async () => {
    const job = CronJob.from({
      cronTime: CronExpression.EVERY_SECOND,
      onTick: this.tick,
      timeZone: 'Asia/Seoul',
      runOnInit: true,
    });

    this.schedulerRegistry.addCronJob('tick', job);
    job.start();
  };
}

import { NestFactory } from '@nestjs/core';
import { LoggingAppModule } from './logging-app.module';
import { LoggingAppService } from './logging-app.service';

async function bootstrap() {
  const app = await NestFactory.create(LoggingAppModule);
  const service = app.get(LoggingAppService);
  await service.init();
}
bootstrap();

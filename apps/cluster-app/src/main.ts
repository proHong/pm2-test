import { NestFactory } from '@nestjs/core';
import { ClusterAppModule } from './cluster-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ClusterAppModule);
  await app.listen(3000);
}
bootstrap();

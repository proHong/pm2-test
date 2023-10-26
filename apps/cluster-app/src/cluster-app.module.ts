import { Module } from '@nestjs/common';
import { ClusterAppController } from './cluster-app.controller';
import { ClusterAppService } from './cluster-app.service';

@Module({
  imports: [],
  controllers: [ClusterAppController],
  providers: [ClusterAppService],
})
export class ClusterAppModule {}

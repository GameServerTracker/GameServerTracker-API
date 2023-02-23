import { CacheModule, Module } from '@nestjs/common';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [SourceController],
  providers: [SourceService]
})
export class SourceModule {}

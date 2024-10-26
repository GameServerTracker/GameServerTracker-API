import { Module } from '@nestjs/common';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register()],
  controllers: [SourceController],
  providers: [SourceService],
  exports: [SourceService]
})
export class SourceModule {}

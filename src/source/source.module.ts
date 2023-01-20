import { Module } from '@nestjs/common';
import { SourceController } from './source.controller';
import { SourceService } from './source.service';

@Module({
  controllers: [SourceController],
  providers: [SourceService]
})
export class SourceModule {}

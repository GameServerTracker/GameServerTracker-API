import { Module } from '@nestjs/common';
import { FivemController } from './fivem.controller';
import { FivemService } from './fivem.service';

@Module({
  controllers: [FivemController],
  providers: [FivemService]
})
export class FivemModule {}

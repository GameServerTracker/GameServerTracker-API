import { Module } from '@nestjs/common';
import { FivemController } from './fivem.controller';
import { FivemService } from './fivem.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register()],
  controllers: [FivemController],
  providers: [FivemService]
})
export class FivemModule {}

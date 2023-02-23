import { CacheModule, Module } from '@nestjs/common';
import { FivemController } from './fivem.controller';
import { FivemService } from './fivem.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [FivemController],
  providers: [FivemService]
})
export class FivemModule {}

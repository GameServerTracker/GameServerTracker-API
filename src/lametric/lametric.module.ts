import { Module } from '@nestjs/common';
import { LametricController } from './lametric.controller';
import { MinecraftModule } from 'src/minecraft/minecraft.module';
import { SourceModule } from 'src/source/source.module';
import { FivemModule } from 'src/fivem/fivem.module';
import { LametricService } from './lametric.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register(), MinecraftModule, SourceModule, FivemModule],  
  controllers: [LametricController], providers: [LametricService]
})
export class LametricModule {}

import { Module } from '@nestjs/common';
import { MinecraftController } from './minecraft.controller';
import { MinecraftService } from './minecraft.service';

@Module({
  controllers: [MinecraftController],
  providers: [MinecraftService]
})
export class MinecraftModule {}

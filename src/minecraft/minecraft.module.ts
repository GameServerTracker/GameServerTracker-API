import { CacheModule, Module } from '@nestjs/common';
import { MinecraftController } from './minecraft.controller';
import { MinecraftService } from './minecraft.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [MinecraftController],
  providers: [MinecraftService]
})
export class MinecraftModule {}

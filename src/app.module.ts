import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinecraftModule } from './minecraft/minecraft.module';
import { SourceModule } from './source/source.module';
import { FivemModule } from './fivem/fivem.module';

@Module({
  imports: [MinecraftModule, SourceModule, FivemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

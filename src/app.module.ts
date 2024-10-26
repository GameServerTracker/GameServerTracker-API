import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinecraftModule } from './minecraft/minecraft.module';
import { SourceModule } from './source/source.module';
import { FivemModule } from './fivem/fivem.module';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { LametricModule } from './lametric/lametric.module';

@Module({
  imports: [MinecraftModule, SourceModule, FivemModule, LametricModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
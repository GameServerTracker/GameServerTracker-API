import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
  .setTitle("Game Server Tracker - API")
  .setDescription(`A API which shows several information on a server Minecraft / Source (Gmod, CS, CSGO) / FiveM`)
  .setVersion("1.0")
  .setContact("BliTz_37", "https://github.com/BliTz037", "blitz@blitzlab.ninja")
  .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api-docs', app, swaggerDocument);
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false, whitelist: true }))
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

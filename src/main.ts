import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port: number | string = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
  .setTitle("Game Server Tracker - API")
  .setDescription(`A API which shows several information on a server Minecraft / Source (Gmod, CS, CSGO) / FiveM`)
  .setVersion("1.0")
  .setContact("BliTz_37", "https://github.com/BliTz037", "blitz@blitzlab.ninja")
  .build();
  const swaggerDocument: OpenAPIObject = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api-docs', app, swaggerDocument);
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false, whitelist: true }))
  app.enableCors();
  await app.listen(port);
  Logger.log(`GST API is running. Listening on port ${port}`, "Bootstrap");
}
bootstrap();

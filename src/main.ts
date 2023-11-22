import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express';
import { writeFileSync } from 'fs';

import { AppModule } from './app.module';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Delivery API')
  .setDescription('Delivery API description')
  .setVersion('1.0')
  .setBasePath('api')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb' }));
  app.useGlobalPipes(new ValidationPipe());

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  writeFileSync('./swagger-spec.json', JSON.stringify(document));

  await app.listen(3000);
}

bootstrap();

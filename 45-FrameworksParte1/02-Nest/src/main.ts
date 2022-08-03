import Config from './config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Libros example')
    .setDescription('The Libros API description')
    .setVersion('1.0')
    .addServer('http://localhost:8080', 'development server')
    .addServer('https://miapp.deheroku.com', 'development server')
    .addTag('libros')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(Config.PORT);
}
bootstrap();

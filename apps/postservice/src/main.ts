import { NestFactory } from '@nestjs/core';
import { PostserviceModule } from './postservice.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config({
  path: join(__dirname, '..', '.env'),
});


async function bootstrap() {
  console.log('DB_USERNAME', process.env.DB_USERNAME);
  const app = await NestFactory.create(PostserviceModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true}));

  const config = new DocumentBuilder()
  .setTitle('Post Service')
  .setDescription('API Documentation')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app,document);
   
  const port = process.env.PORT ?? 3002;
  await app.listen(port);
  console.log(`Post service is running on http://localhost:${port}/api`)
}
bootstrap();

import 'module-alias/register';
import * as dotEnv from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { CustomValidatePipe } from '@Pipes/validation.pipe';
import { join } from 'path';

// Configure environment file with project
dotEnv.config();

// Read port number from env file
const port = process.env.PORT || 4001;

async function bootstrap() {
  // Create nestFactory instance for make server instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: false,
  });

  // Server static contain
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // Custome validation on request using pipe and class-validator
  app.useGlobalPipes(new CustomValidatePipe());

  Logger.log(`🚀  Server ready at http://localhost:${port} `, 'ServerStarted');
  // Run server on port
  await app.listen(port);
}

bootstrap();

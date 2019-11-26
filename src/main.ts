import * as dotEnv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

// Configure environment file with project
dotEnv.config();

// Read port number from env file
const port = process.env.PORT || 4001;

async function bootstrap() {
  // Create nestFactory instance for make server instance
  const app = await NestFactory.create(AppModule);
  Logger.log(`🚀  Server ready at http://localhost:${port} `);
  // Run server on port
  await app.listen(port);
}

bootstrap();

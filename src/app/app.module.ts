import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from '../api/api.module';

const mongoUrl: string =
  process.env.MONGO_DB || 'mongodb://localhost:27017/nest-project';

@Module({
  imports: [ApiModule, MongooseModule.forRoot(mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

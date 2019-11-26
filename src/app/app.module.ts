import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const mongoUrl: string =
  process.env.MONGO_DB || 'mongodb://localhost:27017/nest-project';

@Module({
  imports: [MongooseModule.forRoot(mongoUrl)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

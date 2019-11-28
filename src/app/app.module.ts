import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from '../task/task.module';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

const mongoUrl: string =
  process.env.MONGO_DB || 'mongodb://localhost:27017/nest-project';

@Module({
  imports: [
    TaskModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(mongoUrl),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

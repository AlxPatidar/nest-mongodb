import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from '../task.controller';
import { TaskService } from '../task.service';
import { UsersModule } from '../../users/users.module';
import { TaskSchema } from '../schema/task.schema';

const mongoUrl: string =
  process.env.MONGO_DB || 'mongodb://localhost:27017/nest-project';
describe('Task Controller', () => {
  let controller: TaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
      imports: [
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
        MongooseModule.forRoot(mongoUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }),
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

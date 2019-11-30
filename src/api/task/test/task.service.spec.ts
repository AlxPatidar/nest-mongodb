import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from '../task.service';
import { Model } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from '../schema/task.schema';
const mongoUrl: string =
  process.env.MONGO_DB || 'mongodb://localhost:27017/nest-project';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
      imports: [
        MongooseModule.forRoot(mongoUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }),
        MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

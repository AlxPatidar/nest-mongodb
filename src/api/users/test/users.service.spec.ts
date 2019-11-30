import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../schema/user.schema';

const mongoUrl: string =
  process.env.MONGO_DB || 'mongodb://localhost:27017/nest-project';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
      imports: [
        MongooseModule.forRoot(mongoUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }),
        MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

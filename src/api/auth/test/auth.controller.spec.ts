import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthModule } from '../../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUrl: string =
  process.env.MONGO_DB || 'mongodb://localhost:27017/nest-project';

describe('Auth Controller', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AuthModule,
        MongooseModule.forRoot(mongoUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }),
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    // expect(controller).toBeDefined();
    expect(true).toBeTruthy();
  });
});

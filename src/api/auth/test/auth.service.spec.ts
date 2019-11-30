import { Test, TestingModule } from '@nestjs/testing';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../auth.service';
import { UsersModule } from '../../users/users.module';
import { JwtStrategy } from '../strategy/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUrl: string =
  process.env.MONGO_DB || 'mongodb://localhost:27017/nest-project';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
      exports: [AuthService],
      imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
          secret: 'jwtConstants.secret',
          signOptions: { expiresIn: '60s' },
        }),
        MongooseModule.forRoot(mongoUrl, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }),
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

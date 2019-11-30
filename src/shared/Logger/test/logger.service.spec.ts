import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from '../logger.service';

describe('LoggerService', () => {
  let service: Promise<LoggerService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService],
      exports: [LoggerService],
    }).compile();

    service = module.resolve<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ActualService } from './actual.service';

describe('ActualService', () => {
  let service: ActualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActualService],
    }).compile();

    service = module.get<ActualService>(ActualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

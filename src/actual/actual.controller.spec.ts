import { Test, TestingModule } from '@nestjs/testing';
import { ActualController } from './actual.controller';
import { ActualService } from './actual.service';

describe('ActualController', () => {
  let controller: ActualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActualController],
      providers: [ActualService],
    }).compile();

    controller = module.get<ActualController>(ActualController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

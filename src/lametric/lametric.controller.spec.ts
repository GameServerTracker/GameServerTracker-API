import { Test, TestingModule } from '@nestjs/testing';
import { LametricController } from './lametric.controller';

describe('LametricController', () => {
  let controller: LametricController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LametricController],
    }).compile();

    controller = module.get<LametricController>(LametricController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

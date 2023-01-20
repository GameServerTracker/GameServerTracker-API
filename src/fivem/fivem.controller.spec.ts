import { Test, TestingModule } from '@nestjs/testing';
import { FivemController } from './fivem.controller';

describe('FivemController', () => {
  let controller: FivemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FivemController],
    }).compile();

    controller = module.get<FivemController>(FivemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

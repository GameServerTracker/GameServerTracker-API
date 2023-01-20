import { Test, TestingModule } from '@nestjs/testing';
import { MinecraftController } from './minecraft.controller';

describe('MinecraftController', () => {
  let controller: MinecraftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinecraftController],
    }).compile();

    controller = module.get<MinecraftController>(MinecraftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

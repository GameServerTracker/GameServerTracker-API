import { Test, TestingModule } from '@nestjs/testing';
import { MinecraftService } from './minecraft.service';

describe('MinecraftService', () => {
  let service: MinecraftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinecraftService],
    }).compile();

    service = module.get<MinecraftService>(MinecraftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LametricService } from './lametric.service';

describe('LametricService', () => {
  let service: LametricService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LametricService],
    }).compile();

    service = module.get<LametricService>(LametricService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

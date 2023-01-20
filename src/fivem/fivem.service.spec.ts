import { Test, TestingModule } from '@nestjs/testing';
import { FivemService } from './fivem.service';

describe('FivemService', () => {
  let service: FivemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FivemService],
    }).compile();

    service = module.get<FivemService>(FivemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

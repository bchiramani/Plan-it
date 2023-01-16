import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTypeService } from './service-type.service';

describe('ServiceTypeService', () => {
  let service: ServiceTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceTypeService],
    }).compile();

    service = module.get<ServiceTypeService>(ServiceTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

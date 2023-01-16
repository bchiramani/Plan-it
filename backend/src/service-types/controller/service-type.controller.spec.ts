import { Test, TestingModule } from '@nestjs/testing';
import { ServiceTypeController } from './service-type.controller';

describe('ServiceTypeController', () => {
  let controller: ServiceTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceTypeController],
    }).compile();

    controller = module.get<ServiceTypeController>(ServiceTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

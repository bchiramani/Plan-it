import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { ServiceProviderDto } from './service-providers/service-provider.dto';
import { ServiceProvider } from './service-providers/service-provider.entity';

@Injectable()
export class ServiceProviderService {


    constructor(
        @InjectRepository(ServiceProvider)
        private serviceProviderRepository: Repository<ServiceProvider>,
    ) {}
    
    async addUser(serviceProvider: ServiceProviderDto): Promise<ServiceProviderDto> {
        return await this.serviceProviderRepository.save(serviceProvider);
    }

}

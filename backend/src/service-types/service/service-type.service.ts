import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceType } from '../model/service-types.entity';

@Injectable()
export class ServiceTypeService {

    constructor(
        @InjectRepository(ServiceType) private serviceTypeRepository: Repository<ServiceType>,
    ) {}


    async getAllServiceTypes() {
        const res =  await this.serviceTypeRepository.find()
        return res
    }
    async getByServiceByName(serviceName){
        const res = await this.serviceTypeRepository.createQueryBuilder("serviceType")
        .where("servicetype.serviceName = :serviceName", { serviceName: serviceName })
        .getOne();
        
        return res
    }
}

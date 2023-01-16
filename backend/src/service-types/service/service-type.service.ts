import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceType } from '../model/service-types.entity';

@Injectable()
export class ServiceTypeService {

    constructor(
        @InjectRepository(ServiceType) private postRepository: Repository<ServiceType>,
    ) {}


    async getAllServiceTypes() {
        const res =  await this.postRepository.find()
        return res
    }
}

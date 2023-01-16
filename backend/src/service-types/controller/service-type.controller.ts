import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/shared/decorators/public.decorator';
import { ServiceType } from '../model/service-types.entity';
import { ServiceTypeService } from '../service/service-type.service';
@Public()
@Controller('servicetype')
export class ServiceTypeController {

    constructor(private serviceTypeService: ServiceTypeService) {}

    @Public()
    @Get('getall')
    async getAll(): Promise<ServiceType[]> {
        return await this.serviceTypeService.getAllServiceTypes()
    }

}

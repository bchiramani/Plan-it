import { Body, Controller, Post } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { ServiceProviderDto } from './service-providers/service-provider.dto';
import { ServiceProvider } from './service-providers/service-provider.entity';

@Controller('service-provider')
export class ServiceProviderController {


    constructor(private readonly serviceProviderService: ServiceProviderService) {}
    
    @Post('signup')
    async signUp(@Body() serviceProvider: ServiceProviderDto): Promise<ServiceProviderDto> {
        return await this.serviceProviderService.addUser(serviceProvider);
    }
}

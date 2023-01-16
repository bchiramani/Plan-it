import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ServiceType } from './model/service-types.entity';
import { ServiceTypeController } from './controller/service-type.controller';
import { ServiceTypeService } from './service/service-type.service';

@Module({
    imports: [
    TypeOrmModule.forFeature([ServiceType]),
    ],
    providers: [ServiceTypeService],
    controllers: [ServiceTypeController],
    exports: [TypeOrmModule]
})
export class ServiceTypesModule {}

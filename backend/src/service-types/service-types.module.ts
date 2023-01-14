import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ServiceType } from './model/service-types.entity';

@Module({
    imports: [
    TypeOrmModule.forFeature([ServiceType]),
    ],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class ServiceTypesModule {}

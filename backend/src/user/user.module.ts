
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './users/user.entity';

@Module({
    imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'planit',
        entities: [User],
        synchronize: true,
        }),
    TypeOrmModule.forFeature([User])
    ],
    providers: [UserService, User],
    controllers: [UserController],
    exports: [TypeOrmModule]
})
export class UserModule {
    constructor() {}
}



import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { User } from './model/user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
    // TypeOrmModule.forRoot({
    //     type: 'mysql',
    //     host: 'localhost',
    //     port: 3306,
    //     username: 'root',
    //     password: '',
    //     database: 'planit',
    //     entities: [User],
    //     synchronize: true,
    //     }),
    TypeOrmModule.forFeature([User]),
    AuthModule
    ],
    providers: [UserService, User],
    controllers: [UserController],
    exports: [TypeOrmModule]
})
export class UserModule {
    constructor() {}
}


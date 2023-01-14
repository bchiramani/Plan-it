
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { User } from './model/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { APost } from 'src/post/model/post.entity';
import { JwtService } from '@nestjs/jwt';
import { PostModule } from 'src/post/post.module';

@Module({
    imports: [
    TypeOrmModule.forFeature([User]),
    ],
    providers: [UserService, User, JwtService],
    controllers: [UserController],
    exports: [TypeOrmModule, UserService]
})
export class UserModule {
    constructor() {}
}


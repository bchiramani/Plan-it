import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/model/user.entity';
import { PostController } from './controller/post.controller';
import { APost } from './model/post.entity';
import { PostService } from './service/post.service';

@Module({
    imports: [
    TypeOrmModule.forFeature([APost]),
    ],
    providers: [PostService, APost],
    controllers: [PostController],
    exports: [TypeOrmModule]
})
export class PostModule {
    constructor() {}
}

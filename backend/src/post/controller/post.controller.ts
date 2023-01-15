import { PostService } from '../service/post.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { APost } from '../model/post.entity';


@Controller('post')
export class PostController {

    constructor(private postService: PostService) {}

    @Get()
    getAll(){
        return this.postService.getAllPosts();
    }
    
    @Post('addPost')
    addUser(@Body()post:APost):Promise<APost>{
        return this.postService.addPost(post)
       
    }
    @Get(':userId')
    getPostsByUser(@Param("userId") userId : number):Promise<APost[]>{
        return this.postService.getPostsByUser(userId)
    
    }

}

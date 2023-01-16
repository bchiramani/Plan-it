import { PostService } from '../service/post.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { APost } from '../model/post.entity';
import { Public } from 'src/shared/decorators/public.decorator';
import { Observable } from 'rxjs';

@Public()
@Controller('post')
export class PostController {

    constructor(private postService: PostService) {}
    @Public()
    @Get('getall')
    getAll(): Promise<APost[]> {
        return this.postService.getAllPosts();
    }
    @Public()
    @Post('addpost')
    addPost(@Body() post : APost){
        console.log("we are at post controller with post : ", post)
        return this.postService.addPost(post);
    }
    @Public()
    @Get('servicetype/:serviceType')
    getPostsByServiceType(@Param("serviceType") serviceType:string){
        console.log("hii ")
        return this.postService.getPostsByServiceType(serviceType)
    }

    @Get(':userId')
    getPostsByUser(@Param("userId") userId : number):Promise<APost[]>{
        return this.postService.getPostsByUser(userId)
    
    }

}

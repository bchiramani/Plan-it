import { PostService } from '../service/post.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { APost } from '../model/post.entity';
import { Public } from 'src/shared/decorators/public.decorator';
import { Observable } from 'rxjs';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';


@Controller('post')
export class PostController {

    constructor(private postService: PostService) {}
    @Public()
    
    @Get('getall')
    async getAll(): Promise<APost[]> {
        return await this.postService.getAllPosts();
        
    }
    @Public()
    //@UseGuards(AuthGuard)
    @Post('addpost')
    addPost(@Body() post : any){
        console.log("add post at controller :", post);
        return this.postService.addPost(post);
    }

    @Public()
    @Delete('deletepost/:id')
    deletePost(@Param() id : any){
        console.log("delete post at controller :", id);
        return this.postService.deletePost(id);
    }


    @Public()
    @Get('servicetype/:serviceType')
    getPostsByServiceType(@Param("serviceType") serviceType:string){
        return this.postService.getPostsByServiceType(serviceType)
    }
    @Public()
    @Get(':userId')
    getPostsByUser(@Param("userId") userId : number):Promise<APost[]>{
        return this.postService.getPostsByUser(userId)
    
    }

}

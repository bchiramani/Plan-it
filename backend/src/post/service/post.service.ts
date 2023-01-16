import { Injectable } from '@nestjs/common';
import { APost } from '../model/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(APost) private postRepository: Repository<APost>,
    ) {}
    async getPostById(id: number): Promise<APost> {
        const res =  await this.postRepository.findOne({ 
            where: { 
                id: id,
                } 
            });
        return res
    }


    async getPostsByServiceType(serviceType: string): Promise<APost[]> {
        const posts = await this.postRepository.createQueryBuilder("post")
        .innerJoinAndSelect("post.user", "user")
        .where("user.serviceType = :serviceType", { serviceType: serviceType })
        .getMany();
        
        return posts
    }




    async getAllPosts() {
        return await this.postRepository.find()
        
    }

    async getPostsByUser(userId: number): Promise<APost[]> {
        
        const posts = await this.postRepository.createQueryBuilder("post")
        .innerJoinAndSelect("post.user", "user")
        .where("user.id = :userId", { userId: userId })
        .getMany();
        
        return posts
    }

    async addPost(post: APost): Promise<APost> {
        console.log("post at backend service : ", post)
        return await this.postRepository.save(post);
    }

}

import { Injectable } from '@nestjs/common';
import { APost } from '../model/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(APost) private postRepository: Repository<APost>,
    ) {}

    async findPost(id: number): Promise<APost> {
        const res =  await this.postRepository.findOne({ 
            where: { 
                id: id,
                } 
            });
        return res
    }

    async getAllPosts(): Promise<APost[]> {
        const res =  await this.postRepository.find()
        return res
    }

    async getPostsByUser(userId: number): Promise<APost[]> {
        
        const posts = await this.postRepository.createQueryBuilder("post")
        .innerJoinAndSelect("post.user", "user")
        .where("user.id = :userId", { userId: userId })
        .getMany();
        
        return posts
    }

    async addPost(post: APost): Promise<APost> {
        return await this.postRepository.save(post);
    }

}

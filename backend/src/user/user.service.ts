import { Injectable } from '@nestjs/common';
import { User } from './users/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    
    
    async findUser(email: string, password: string): Promise<User> {
    return await this.userRepository.findOne({ 
        where: { 
            email: email,
            password: password
            } 
        });
    }

}

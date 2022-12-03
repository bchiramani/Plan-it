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
    
    
    async findUser(user: User): Promise<User> {
        console.log(user);
        const res =  await this.userRepository.findOne({ 
            where: { 
                email: user.email,
                password: user.password
                } 
            });
        console.log(res);
        return res;
    }

  /*  async addUser(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }*/

}

import { Injectable } from '@nestjs/common';
import { User } from '../model/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Observable, from} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as bcrypt from 'bcrypt';
import { Param } from '@nestjs/common/decorators';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        
    ) {}
    
    
    async verifyUser(user: User): Promise<User> {
        const res =  await this.userRepository.findOne({ 
            where: { 
                email: user.email,
                } 
            });
            if (!res) return null ;
            const match = await bcrypt.compare(user.password, res.password);
        if (match) { return res ; }
        return match
    }

    async addUser(user: User): Promise<User> {
        user.password = await bcrypt.hash(user.password, 10);
        return await this.userRepository.save(user);
    }


    async findOneByEmail(email: string): Promise<User> {
        const res =  await this.userRepository.findOne({ 
            where: { 
                email: email
                } 
            });
        
        return res
    }


    async findOneById(id: {id:number}): Promise<User> {
        console.log("at user service get user by id ", id.id)
        // const res =  await this.userRepository.findOne({ 
        //     where: { 
        //         id: id
        //         } 
        //     });
        const res = await this.userRepository.createQueryBuilder("user")
        .where("user.id = :id", { id: id.id })
        .getOne();
        return res
    }
     async getByServiceType(@Param() serviceType: string){
        const res = await this.userRepository.createQueryBuilder("user")
        .innerJoinAndSelect("user.serviceType", "serviceType")
        .where("serviceType.serviceName = :serviceType", { serviceType: serviceType })
        .getMany();
        return res
    }



    
    findAll():  Observable<User[]> {
        return from(this.userRepository.find()).pipe(
            map((users: User[]) => {
                users.forEach(function (v) {delete v.password});
                return users;
            })
        );
    }
    deleteUser(id: number): Observable<any>{
        return from(this.userRepository.delete(id))
    }
    updateUser(id: number,user:User): Observable<any>{
        return from(this.userRepository.update(id,user))
    }

}

import { Injectable } from '@nestjs/common';
import { User } from '../model/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Observable, from} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AuthService } from 'src/auth/auth/auth.service';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private authService: AuthService

    ) {}
    
    
    // async findUser(user: User): Promise<User> {
    //     console.log(user);
    //     const res =  await this.userRepository.findOne({ 
    //         where: { 
    //             email: user.email,
    //             password: user.password
    //             } 
    //         });
    //     console.log(user.email);
    //     console.log(user.password);
    //     return res;
    // }

    addUser(user: User): Observable<User> {
        return this.authService.hashPassword(user.password).pipe(
            switchMap((passwordHash: string) => {

                const newUser = new User();
                newUser.email = user.email;
                newUser.password = passwordHash;

                return from(this.userRepository.save(newUser))
            })
        )
        // .pipe(
        //     map((user: User) => {
        //         const {password, ...result} = user;
        //         return result;
        //     }),
        //     catchError(err => throwError(err))
        // )
        //return from(this.userRepository.save(user));
    }
    findUser(id:number): Observable<User> {
        return from(this.userRepository.findOneBy({id}))
        // .pipe(
        //     map(user:User) => {
        //         const{password, ...result} = user;
        //         return result;
        //     }
        // );
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

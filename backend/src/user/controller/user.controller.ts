import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../model/user.entity';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/service/auth.service';
import { Public } from 'src/shared/decorators/public.decorator';

@Public()
@Controller('user')
export class UserController {


    constructor(private userService: UserService) {
    }
    @Public()
    @Get('getall')
    getAll(){
        return this.userService.findAll()
    }
    @Public()
    @Get('serviceType/:serviceType')
    getUserByServiceType(@Param() serviceType){
        return this.userService.getByServiceType(serviceType.serviceType)
    }
    @Get('byId/:id')
    getUserById(@Param()id : {id:number}):Promise<User>{
        let myUser: User
        return this.userService.findOneById(id)
    }
  



}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../model/user.entity';
import { Observable } from 'rxjs';

@Controller('users')
export class UserController {


    constructor(private userService: UserService) {}
    
    @Post()
    addUser(@Body()user:User):Observable<User>{
        return this.userService.addUser(user)
    }
    @Get(':id')
    findUser(@Param() params):Observable<User>{
        return this.userService.findUser(params.id)
    }
    @Get()
    findAll():Observable<User[]>{
        return this.userService.findAll()
    }

    @Delete(':id')
    deleteUser(@Param('id') id:string):Observable<User>{
        return this.userService.deleteUser(Number(id))

    }

    @Put(':id')
    updateUser(@Param('id') id:string,@Body() user:User):Observable<User>{
        return this.userService.updateUser(Number(id),user)
    }


    // @Post('login')
    // async logIn(@Body() user: User): Promise<User> {
    //     return await this.userService.findUser(user);
    // }

    


}

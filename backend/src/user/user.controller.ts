import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './users/user.entity';

@Controller('user')
export class UserController {


    constructor(private readonly userService: UserService) {}
    
    @Post('login')
    async logIn(@Body() user: User): Promise<User> {
        return await this.userService.findUser(user);
    }

    /*
    @Post('add')
    async addUser(@Body() user: User): Promise<User> {
        return await this.userService.addUser(user);
    } **/


}

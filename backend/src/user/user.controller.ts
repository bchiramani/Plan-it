import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './users/user.entity';

@Controller('user')
export class UserController {


    constructor(private readonly userService: UserService) {}
    
    @Post('login')
    async logIn(@Body() credentials: {email: string, password: string}): Promise<User> {
        return await this.userService.findUser(credentials.email, credentials.password);
    }

}

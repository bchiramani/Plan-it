import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Public } from 'src/shared/decorators/public.decorator';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { LocalAuthGuard } from '../local-auth.guard';
import { AuthService } from '../service/auth.service';
import { Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { User } from 'src/user/model/user.entity';

@Controller('auth')
export class AuthController {


    constructor(private authService: AuthService, @InjectRepository(User) private userRepository: Repository<User>,){}

    //@UseGuards(LocalAuthGuard)
    @Public()
    @Post('login')
    async login(@Body() user: User) {
        return this.authService.login(user);
    }

    @Public()
    @Post('signup')
    async signup(@Body() user: User) {
        return this.authService.signup(user);
    }

    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return this.authService.getUser(req)
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../model/user.entity';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/service/auth.service';


@Controller('user')
export class UserController {


    constructor(private userService: UserService) {}
  



}

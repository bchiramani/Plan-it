import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { Request } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/service/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Public } from './shared/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  
}

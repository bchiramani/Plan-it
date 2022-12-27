import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';

@Module({
    imports:[
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject:[ConfigService],
            useFactory:async(ConfigService:ConfigService) => ({
                secret:ConfigService.get('JWT_SECRET'),
                signOptions:{expiresIn:'100s'}
            })
        })
    ],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {}

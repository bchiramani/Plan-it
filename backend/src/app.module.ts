import { ConfigurableModuleBuilder, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserService } from './user/service/user.service';
import { ServiceProviderController } from './service-provider/service-provider.controller';
import { ServiceProviderService } from './service-provider/service-provider.service';
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [ 
    ConfigModule.forRoot({isGlobal :true}),
    TypeOrmModule.forRoot({
    type: 'mysql',
    url:process.env.DATABASE_URL,
    // host: 'localhost',
    // port: 3306,
    // username: 'root',
    // password: '',
    // database: 'planit',
    // entities: [],
    synchronize: true,
    autoLoadEntities: true,
  }), UserModule, AuthModule, 
],
  controllers: [AppController, UserController, ServiceProviderController],
  providers: [AppService, UserService, ServiceProviderService],
})
export class AppModule {
  constructor() {}
}

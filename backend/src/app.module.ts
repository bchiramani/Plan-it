import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ServiceTypesModule } from './service-types/service-types.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({isGlobal :true}),
    TypeOrmModule.forRoot({
    type: 'mysql',
    //url:process.env.DATABASE_URL,
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'planit',
    entities: [],
    synchronize: true,
    autoLoadEntities: true,
  }), AuthModule, PostModule, ServiceTypesModule
],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {
  constructor() {}
}

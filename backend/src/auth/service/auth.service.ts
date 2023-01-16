import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/service/user.service';
import { User } from 'src/user/model/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {


  constructor(private userService: UserService,  private jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
    ) {}


  async validateUser(email: string, pass: string): Promise<any> {

    const res =  await this.userRepository.findOne({ 
        where: { 
            email: email,
            } 
        });
        const match = await bcrypt.compare(pass, res.password);
    if (match) { return res ; }
    return match
    
  }

  getUser(req: any) {
    return req.user;
}

  async login(user: User) {
 
    const fullUser = await this.userService.verifyUser(user)
    return this.respondWithToken(fullUser);
    
  }

  async signup(user: User) {

    const fullUser = await this.userService.addUser(user)
    return this.respondWithToken(fullUser);
    
}

  respondWithToken(user) {

    if (user) {
      const email = user.email
      const id = user.id
      const payload = { id, email };
      return {
        access_token: this.jwtService.sign(payload),
      };
  }

  return null

  }
}
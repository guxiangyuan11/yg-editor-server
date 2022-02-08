import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { AuthService } from './auth.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserEntity> {
    console.log(231213)
    const user = await this.authService.validate(username, password);
    if (user) return user;
    else throw new UnauthorizedException('incorrect username or password');
  }
}
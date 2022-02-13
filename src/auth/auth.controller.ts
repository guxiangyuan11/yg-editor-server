import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { TokenEntity } from './token.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {UserEntity} from '../user/user.entity'
interface SelfUserEntity {
  token: string;
  user: UserEntity;
}

@Controller('auth')
export class AuthController {
constructor(private readonly authService:AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() request): Promise<SelfUserEntity> {
    return {
      user: request.user,
      token: await this.authService.login(request.user)
    }
  }
}

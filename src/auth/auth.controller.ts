import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() request): Promise<UserEntity> {
    return request.user;
  }
}

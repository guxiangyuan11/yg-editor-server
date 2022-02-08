import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt'
import {TetStrategy} from './tet.strategy'
import {UserService} from '../user/user.service'


@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: 'json_web_token_secret_key',
  })],
  providers: [AuthService, UserService, LocalStrategy, TetStrategy],
  controllers: [AuthController]
})
export class AuthModule {}

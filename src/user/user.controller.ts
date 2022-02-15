import { Controller, Get, Post, UseGuards, Request, Body, UsePipes,UseInterceptors } from '@nestjs/common';
import {ValidationPipe} from '../common/pipes/validation.pipe'
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import {PhoneNumberVeriCodeDto} from './dto/phonenumber-veriCode.dot'
import {SuccessInterceptor} from '../common/interceptors/success.interceptors'

class CreateCatDto {
  id: string;
}
@Controller('/api/users')
// @UseInterceptors(SuccessInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/loginByPhoneNumber')
  @UsePipes(ValidationPipe)
  async loginByPhoneNumber(@Body() phoneNumberVeriCode: PhoneNumberVeriCodeDto) {
    return {message:'登录成功'}
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async list(@Request() req): Promise<Array<UserEntity>> {
    console.log(req.user.username)
    return this.userService.listAll();
  }
}

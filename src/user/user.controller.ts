import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async list(): Promise<Array<UserEntity>> {
    return this.userService.listAll();
  }
}

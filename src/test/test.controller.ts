import { Controller, Get, UseFilters, UsePipes, HttpStatus, HttpException,Param } from '@nestjs/common';
import {HttpExceptionFilter} from '../common/filters/http-exception.filter'
import { ValidationPipe } from '../common/pipes/validation.pipe'
import {CommonException} from '../common/errors/common.exception'
import {sendVeriCodeErrorFailInfo} from '../common/failInfo/user'

class CreateCatDto {
    id: string;
  }

export class ForbiddenException extends HttpException {
    constructor() {
      super('Forbidden', HttpStatus.BAD_REQUEST);
    }
  }

@Controller('test')
export class TestController {
    constructor() {}


    @Get(':id')
    @UsePipes(ValidationPipe)
    // @UseFilters(new HttpExceptionFilter())
    getTestContr(@Param() id: CreateCatDto) {
        throw new CommonException(sendVeriCodeErrorFailInfo);

        return 'id:'+ id.id
        // return this.catsService.getHello()
    }
}

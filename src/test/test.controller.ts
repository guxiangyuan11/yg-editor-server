import { Controller, Get, UseFilters, UsePipes, HttpStatus, HttpException,Param } from '@nestjs/common';
import {HttpExceptionFilter} from '../filter/http-exception.filter'
import { ValidationPipe } from '../pipe/validation.pipe'

class CreateCatDto {
    id: string;
  }

export class ForbiddenException extends HttpException {
    constructor() {
      super('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

@Controller('test')
export class TestController {
    constructor() {}


    @Get(':id')
    @UsePipes(ValidationPipe)
    @UseFilters(new HttpExceptionFilter())
    getTestContr(@Param() id: CreateCatDto) {
        // throw new HttpException({
        //     status: HttpStatus.FORBIDDEN,
        //     message:'211'
        // }, HttpStatus.FORBIDDEN);
        return 'id:'+ id.id
        // return this.catsService.getHello()
    }
}

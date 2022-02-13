import { HttpException, HttpStatus } from '@nestjs/common';

interface ResponseObject {
  status: string | number;
  message: string;
}

export class CommonException extends HttpException {
  constructor(responseObj: ResponseObject, status = HttpStatus.BAD_REQUEST) {
    super(responseObj, status);
  }
}

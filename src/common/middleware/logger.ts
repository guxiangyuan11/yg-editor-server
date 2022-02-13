import { Injectable } from '@nestjs/common';
export class LoggerMiddleware {
    use(req, res, next) {

      console.log('Request...');
      next();
    }
  }
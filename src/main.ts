import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpExceptionFilter} from './common/filters/http-exception.filter'
import {SuccessInterceptor} from './common/interceptors/success.interceptors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new SuccessInterceptor())
  await app.listen(3000);
}
bootstrap();

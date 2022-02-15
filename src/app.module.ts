import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { LoggerMiddleware } from './common/middleware/logger';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import {TestModule} from './test/test.module'

@Module({
  imports: [AuthModule, UserModule, TestModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform {
  // metatype是传进来元类型参数
  async transform(value: any, { metatype }: ArgumentMetadata) {
    // 判断元参数类型是否是自定义的，如果不是则直接返回value
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }
    const object = plainToClass(metatype, value)
    const error = await validate(object, {skipMissingProperties: true})
    if(error.length > 0) {
        console.log(error)
        const errorStr = JSON.stringify(error.map((item) => {
            return item.constraints
        }))
        throw new BadRequestException(errorStr)
    }
    return value;
  }

  private toValidate(metatype: Function) {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}

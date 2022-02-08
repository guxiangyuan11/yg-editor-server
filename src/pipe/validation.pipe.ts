import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common'

@Injectable()
export class ValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('ValidationPipe:', value)
        console.log('ValidationPipe:', metadata.metatype)
        const types: Function[] = [Array, String, Object]
        console.log('Is String?:', types.includes( metadata.metatype))
        return value
    }
}
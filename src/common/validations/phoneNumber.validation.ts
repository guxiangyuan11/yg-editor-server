import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'phoneNumberRule', async: false })
export class PhoneNumberValidation implements ValidatorConstraintInterface {
  validate(phone: string, args: ValidationArguments) {
      console.log(phone)
    return /^1[34578]\d{9}$/.test(phone); // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return '手机号输入格式不正确!';
  }
}


@ValidatorConstraint({ name: 'veriCodeRule', async: false })
export class VeriCodeRuleValidation implements ValidatorConstraintInterface {
  validate(veriCode: string, args: ValidationArguments) {
    console.log(veriCode)
    return /^\d{4}$/.test(veriCode); // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return '验证码输入格式不正确!';
  }
}
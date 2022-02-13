import {
    IsString,
    IsPhoneNumber,
    Validate
} from 'class-validator'
import {PhoneNumberValidation, VeriCodeRuleValidation} from '../../common/validations/phoneNumber.validation'


export class PhoneNumberVeriCodeDto {

    @Validate(PhoneNumberValidation)
    readonly phoneNumber: string;

    @Validate(VeriCodeRuleValidation)
    readonly vericode: string|number;
}
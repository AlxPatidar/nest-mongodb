import * as _ from 'lodash';
import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
  Injectable,
  HttpException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CustomValidatePipe implements PipeTransform<any> {
  // Change value error with validation
  async transform(value, metadata: ArgumentMetadata) {
    // Check submitted data is present or not
    if (!value || _.isEmpty(value)) {
      throw new BadRequestException({
        success: false,
        message: 'No data submitted.',
        data: {},
      });
    }

    const { metatype } = metadata;
    // Check validation
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new HttpException(
        { status: false, message: this.buildError(errors), data: {} },
        HttpStatus.BAD_REQUEST
      );
    }
    return value;
  }
  // Return first validation error
  private buildError(errors) {
    let message = '';
    errors.forEach(el => {
      const error = _.last(Object.entries(el.constraints));
      if (message === '') {
        message = error[1];
      }
    });
    return message;
  }
  // Validate and find error with all type
  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
  }
}

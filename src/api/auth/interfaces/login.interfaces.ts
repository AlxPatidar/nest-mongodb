import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class LoginRequestDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email address is invalid' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(5, { message: 'Password must have 6 chars' })
  @MaxLength(30, { message: 'Password is too long. only 30 chars allow.' })
  password: string;
}

export interface LoginResponse {
  readonly token: string;
  readonly data: any;
  readonly success: boolean;
  readonly message: string;
}

export interface ResponseData {
  readonly success: boolean;
  readonly message: string;
  readonly data: any;
}

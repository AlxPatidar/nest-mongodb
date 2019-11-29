import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class RegistrationRequestDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email address is invalid' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(5, { message: 'Password must have 6 chars' })
  @MaxLength(30, { message: 'Password is too long. only 30 chars allow.' })
  password: string;
}

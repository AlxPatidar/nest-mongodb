import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsMongoId,
} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;
  @IsNotEmpty({ message: 'UserId is required' })
  @IsMongoId({ message: 'Invalid userId format' })
  userId: string;
  completed: boolean;
}

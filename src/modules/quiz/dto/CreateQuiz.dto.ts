import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'The title field is required' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({ message: 'The description field is required' })
  @Length(3)
  description: string;
}

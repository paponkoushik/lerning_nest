import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'The question field is required' })
  @Length(3, 255)
  question: string;

  @IsNotEmpty({ message: 'The question quiz id is required' })
  quizId: number;
}

import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';

@Injectable()
export class QuizService {
  getQuiz(): unknown {
    return [1, 2, 3, 4];
  }

  createQuiz(quizData: CreateQuizDto): unknown {
    return { data: quizData };
  }
}

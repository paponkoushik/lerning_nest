import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getQuiz(): unknown {
    return [1, 2, 3, 4];
  }

  createQuiz(quizData: { name: string; age: number }): unknown {
    return { data: quizData };
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getQuiz(): unknown {
    return [1, 2, 3, 4];
  }
}

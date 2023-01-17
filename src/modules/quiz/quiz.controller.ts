import { Controller, Get } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get('/get-all-quiz')
  getQuiz() {
    return this.quizService.getQuiz();
  }
}

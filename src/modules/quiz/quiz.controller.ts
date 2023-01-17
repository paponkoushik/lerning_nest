import { Body, Controller, Get, Post, HttpCode } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get('/get-all-quiz')
  getQuiz() {
    return this.quizService.getQuiz();
  }
  @Post('/create')
  @HttpCode(200)
  create(@Body() quizData) {
    return this.quizService.createQuiz(quizData);
  }
}

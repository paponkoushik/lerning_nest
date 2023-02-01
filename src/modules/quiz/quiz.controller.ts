import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreateQuiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get('/get-all-quiz')
  getQuiz() {
    return this.quizService.getQuiz();
  }
  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async create(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createQuiz(quizData);
  }
}

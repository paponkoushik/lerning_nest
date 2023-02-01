import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question.controller';
import { Question } from './question.entity';
import { QuestionService } from './question.service';
import { QuizService } from '../quiz/quiz.service';
import { Quiz } from '../quiz/quiz.entity';

@Module({
  controllers: [QuestionController],
  imports: [TypeOrmModule.forFeature([Question, Quiz])],
  providers: [QuestionService, QuizService],
})
export class QuestionModule {}

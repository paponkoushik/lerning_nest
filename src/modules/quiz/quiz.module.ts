import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [QuizService],
})
export class QuizModule {}

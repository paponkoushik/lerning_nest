import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private quizModel: Repository<Quiz>) {}
  getQuiz(): unknown {
    return [1, 2, 3, 4];
  }

  async getQuizById(id: number) {
    return await this.quizModel.findOne({
      where: { id: id },
      relations: ['questions'],
    });
  }

  async createQuiz(quiz: CreateQuizDto) {
    return await this.quizModel.save(quiz);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository:
      Repository<Comment>,
  ){}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(comment);
  }

  findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  async findOne(id: number): Promise<Comment> {
    const comment = await this.commentRepository.findOne({where: {id}});
    if(!comment){
      throw new NotFoundException(`Comment with ${id} not found`);
    }
    return comment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment | null> {
    const existing = await this.findOne(id);
    const updated = Object.assign(existing, updateCommentDto);
    return this.commentRepository.save(updated);

  }

  async remove(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}

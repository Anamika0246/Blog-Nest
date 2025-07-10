import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { HttpService } from '@nestjs/axios';
import { BadRequestException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository:
      Repository<Post>,
      private readonly http: HttpService,
  ){}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const userId = createPostDto.userId;

    try{
        const response = await firstValueFrom(
            this.http.get(`http://localhost:3001/users/${userId}`)
        );
    
        if(!response.data){
        throw new BadRequestException('User not found');
        }
    } catch (err) {
        throw new BadRequestException('User Validation Failed');
    }
    const post = this.postRepository.create(createPostDto);
    return this.postRepository.save(post);
  }

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.postRepository.findOne({where: {id}});
    if(!post){
      throw new NotFoundException(`Post with ${id} not found`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post | null> {
    const existing = await this.findOne(id);
    const updated = Object.assign(existing, updatePostDto);
    return this.postRepository.save(updated);

  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}

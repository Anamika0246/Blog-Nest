import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

describe('CommentService', () => {
  let service: CommentService;
  let repo: Repository<Comment>;

  const mockRepo = {
    create: jest.fn(dto => dto),
    save: jest.fn(comment => Promise.resolve({ id: 1, ...comment })),
    find: jest.fn(() => Promise.resolve([{ id: 1, text: 'Nice post!' }])),
    findOne: jest.fn(({ where: { id } }) =>
      id === 1 ? Promise.resolve({ id, text: 'Comment 1' }) : Promise.resolve(null)
    ),
    delete: jest.fn(() => Promise.resolve()),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentService,
        { provide: getRepositoryToken(Comment), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<CommentService>(CommentService);
    repo = module.get<Repository<Comment>>(getRepositoryToken(Comment));
  });

  it('should create comment', async () => {
    const dto = { text: 'Great post!', postId: 1 };
    const result = await service.create(dto);
    expect(result).toEqual({ id: 1, ...dto });
  });

  it('should return comment by id', async () => {
    const result = await service.findOne(1);
    expect(result).toHaveProperty('text', 'Comment 1');
  });

  it('should throw error if comment not found', async () => {
    await expect(service.findOne(99)).rejects.toThrow(NotFoundException);
  });
});

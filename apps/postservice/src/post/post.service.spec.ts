
// import { Test, TestingModule } from '@nestjs/testing';
// import { PostService } from './post.service';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Post } from './entities/post.entity';
// import { Repository } from 'typeorm';
// import { HttpService } from '@nestjs/axios';
// import { of } from 'rxjs';
// import { NotFoundException, BadRequestException } from '@nestjs/common';

// describe('PostService', () => {
//   let service: PostService;
//   let repo: Repository<Post>;

//   const mockRepo = {
//     create: jest.fn(dto => dto),
//     save: jest.fn(post => Promise.resolve({ id: 1, ...post })),
//     findOne: jest.fn(({ where: { id } }) =>
//       id === 1 ? Promise.resolve({ id, title: 'First Post' }) : Promise.resolve(null)
//     ),
//     find: jest.fn(() => Promise.resolve([{ id: 1, title: 'Post1' }])),
//     delete: jest.fn(() => Promise.resolve()),
//   };

//   const mockHttp = {
//     get: jest.fn(() =>
//       of({ data: { id: 1, name: 'Anamika', email: 'a@mail.com' } })
//     ),
//   };

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         PostService,
//         { provide: getRepositoryToken(Post), useValue: mockRepo },
//         { provide: HttpService, useValue: mockHttp },
//       ],
//     }).compile();

//     service = module.get<PostService>(PostService);
//   });

//   it('should create post if user is valid', async () => {
//     const dto = { title: 'My Post', content: 'Hello', userId: 1 };
//     const result = await service.create(dto);
//     expect(result).toHaveProperty('id');
//     expect(mockHttp.get).toBeCalledWith('http://localhost:3001/users/1');
//   });

//   it('should throw error if user validation fails', async () => {
//     mockHttp.get = jest.fn(() => of({ data: null }));
//     await expect(service.create({ title: '', content: '', userId: 99 })).rejects.toThrow(
//       BadRequestException,
//     );
//   });

//   it('should find one post by id', async () => {
//     const post = await service.findOne(1);
//     expect(post).toHaveProperty('title', 'First Post');
//   });

//   it('should throw error if post not found', async () => {
//     await expect(service.findOne(99)).rejects.toThrow(NotFoundException);
//   });
// });


import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

describe('UserService', () => {
  let service: UserService;
  let repo: Repository<User>;

  const mockUserRepo = {
    create: jest.fn(dto => dto),
    save: jest.fn(user => Promise.resolve({ id: 1, ...user })),
    findOne: jest.fn(({ where: { id } }) =>
      id === 1 ? Promise.resolve({ id, name: 'Anamika' }) : Promise.resolve(null)
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: mockUserRepo },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should create a user', async () => {
    const dto = { name: 'Anamika', email: 'a@mail.com', password: '123' };
    expect(await service.create(dto)).toEqual({ id: 1, ...dto });
  });

  it('should find a user by id', async () => {
    const result = await service.findOne(1);
    expect(result).toHaveProperty('name', 'Anamika');
  });

  it('should throw error if user not found', async () => {
    await expect(service.findOne(99)).rejects.toThrow(NotFoundException);
  });
});



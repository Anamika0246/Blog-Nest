import { Test, TestingModule } from '@nestjs/testing';
import { CommentserviceController } from './commentservice.controller';
import { CommentserviceService } from './commentservice.service';

describe('CommentserviceController', () => {
  let commentserviceController: CommentserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommentserviceController],
      providers: [CommentserviceService],
    }).compile();

    commentserviceController = app.get<CommentserviceController>(CommentserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(commentserviceController.getHello()).toBe('Hello World!');
    });
  });
});

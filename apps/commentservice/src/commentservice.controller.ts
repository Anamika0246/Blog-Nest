import { Controller, Get } from '@nestjs/common';
import { CommentserviceService } from './commentservice.service';

@Controller()
export class CommentserviceController {
  constructor(private readonly commentserviceService: CommentserviceService) {}

  @Get()
  getHello(): string {
    return this.commentserviceService.getHello();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}

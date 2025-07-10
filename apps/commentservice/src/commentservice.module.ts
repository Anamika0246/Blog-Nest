import { Module } from '@nestjs/common';
import { CommentsController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Comment } from './comment/entities/comment.entity';
import { join } from 'path';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: join(__dirname, '..', '.env'),
      }),
      
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (config: ConfigService) => ({
      type: 'mysql',
      host: config.get('DB_HOST'),
      port: config.get<number>('DB_PORT'),
      username: config.get('DB_USERNAME'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      entities: [Comment],
      synchronize: true,
    }),
    inject: [ConfigService],
  }),
  
   TypeOrmModule.forFeature([Comment]),
   HttpModule,
  ],
  controllers: [CommentsController],
  providers: [CommentService],
})
export class CommentserviceModule {}

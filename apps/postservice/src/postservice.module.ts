import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Post } from './post/entities/post.entity';
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
      entities: [Post],
      synchronize: true,
    }),
    inject: [ConfigService],
  }),
  
   TypeOrmModule.forFeature([Post]),
   HttpModule,
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostserviceModule {}

import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { join } from 'path';

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
    entities: [User],
    synchronize: true,
  }),
  inject: [ConfigService],
}),

 TypeOrmModule.forFeature([User]),
],
controllers: [UserController],
  providers: [UserService],
})
export class UserserviceModule {}

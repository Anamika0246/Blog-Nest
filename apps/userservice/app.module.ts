// import { Module } from '@nestjs/common';
// import { UserserviceController } from './userservice.controller';
// import { UserserviceService } from './userservice.service';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './user/entities/user.entity';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),
    
// TypeOrmModule.forRootAsync({
//   imports: [ConfigModule],
//   useFactory: (config: ConfigService) => ({
//     type: 'mysql',
//     host: config.get('DB_HOST'),
//     port: config.get<number>('DB_PORT'),
//     username: config.get('DB_USERNAME'),
//     password: config.get('DB_PASSWORD'),
//     database: config.get('DB_NAME'),
//     entities: [User],
//     synchronize: true,
//   }),
//   inject: [ConfigService],
// }),

//  TypeOrmModule.forFeature([User]),
// ],
  
// })
// export class UserserviceModule {}

import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
    export class UserService {
        constructor(@InjectRepository(User) private userRepo: Repository<User>){}

        async create(createUserDto: CreateUserDto): Promise<User>{
            const user = this.userRepo.create(createUserDto);
            return this.userRepo.save(user);
        }

        async findOne(id: number): Promise<User>{
            const user= await this.userRepo.findOne({where: {id}});
            if(!user) throw new NotFoundException('User not Found');
            return user;
        }
    }

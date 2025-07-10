import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')

export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() dto: CreateUserDto){
        return this.userService.create(dto);
    }
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.userService.findOne(id);
    }

}
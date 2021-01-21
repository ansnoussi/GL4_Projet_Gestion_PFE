import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @Post('register')
    async create(@Body() createUserDto: CreateUserDto) {
        const doc = await this.usersService.create(createUserDto);
        return {
            userId: doc.id,
            success: true
        }
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        try {
            const response = await this.usersService.login(loginUserDto)
            return response
        }catch(e){
            return e
        }
    }

    // This route will require successfully passing our default auth strategy (JWT) in order
    // to access the route
    @Get('test')
    @UseGuards(AuthGuard('jwt'))
    testAuthRoute() {
        return {
            message: 'You did it!'
        }
    }

}
import { Controller, Get, Post, Body, UseGuards, NotFoundException, Patch, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';
import { CreateSalleDto } from './dto/create-salle.dto';

@Controller('admin')
export class AdminController {
    /*
        constructor(private usersService: UsersService) {
    
        }
    
        @Post('enseignants')
        @UseGuards(AuthGuard('jwt'))
        async create(@Body() createUserDto: CreateUserDto) {
            const doc = await this.usersService.create(createUserDto);
            return {
                userId: doc.id,
                success: true
            }
        }
    */
    constructor(private adminService: AdminService) {

    }

    @Post('salles')
    async createSalle(@Body() createSalleDto: CreateSalleDto) {
        const doc = await this.adminService.createSalle(createSalleDto);
        return {
            salleId: doc._id,
            success: true
        }
    }

    @Get('salles')
    async getSalles() {
        const docs = await this.adminService.getAllSalles();
        if (!docs) {
            return NotFoundException;
        }
        return docs
    }
}
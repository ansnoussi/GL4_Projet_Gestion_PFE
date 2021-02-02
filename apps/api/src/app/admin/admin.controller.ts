import { Controller, Get, Post, Body, UseGuards, NotFoundException, Patch, Param, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';
import { newEnseignantDto } from '@gl4/api-interfaces';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {

    }

    @Post('enseignant')
    // @UseGuards(AuthGuard('jwt'))
    async createEnseignant(@Body() body: newEnseignantDto, @Res() response) {
        try {
            const newEnseignat = await this.adminService.createNewEnseignant(body)
            return {
                success : true,
                data : newEnseignat
            }
        } catch (e) {
            response.status(500).json({
                message: "Impossible d'ajouter un enseignant",
                success: false,
                e,
            });
        }
    }
}
import { Controller, Post, Body, Res, Get, Req, NotFoundException, Delete } from '@nestjs/common';
import { newSujetDto } from "@gl4/api-interfaces"
import { SujetService } from './sujet.service';

@Controller('sujet')
export class SujetController {

    constructor(private sujetService: SujetService) {

    }

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    async createSujet(@Body() newSujetDto: newSujetDto, @Res() response) {

        this.sujetService.createNew(newSujetDto)
            .then((sujet) => {
                response.status(200).json(sujet)
            })
            .catch(e => {
                response.status(500).json({
                    message: "Impossible d'ajouter un sujet",
                    e,
                });
            })
    }

    @Get()
    async getAll(@Res() resp){
        const sujets = await this.sujetService.getAll()
        resp.status(200).json(sujets)
    }

    @Get(':id')
    async getById(@Req() req, @Res() resp){
        const sujet = await this.sujetService.getById(req.params.id)
        if(!sujet){
            throw NotFoundException;
        }

        resp.status(200).json(sujet)
    }

    @Delete(':id')
    async deleteSujet(@Req() req, @Res() resp){
        const sujet = await this.sujetService.deleteSujet(req.params.id);
        if(!sujet){
            throw NotFoundException;
        }

        resp.status(200).json(sujet)
    }
}
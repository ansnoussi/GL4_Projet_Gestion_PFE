import { Controller, Res, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { SalleService } from './salle.service';
import { AuthGuard } from '@nestjs/passport';
import { newSalleDto } from "@gl4/api-interfaces"


@Controller('salle')
export class SalleController {

    constructor(private salleService: SalleService) {}

    @Get()
    // @UseGuards(AuthGuard('jwt'))
    async getAllSalles(@Res() response) {
        this.salleService.getAll()
        .then((salles) => {
            response.status(200).json(salles)
        })
        .catch(e => {
            response.status(500).json({
                message: "Impossible de récupérer les salles'",
                e,
            });
        })
    }

    @Get(':id')
    // @UseGuards(AuthGuard('jwt'))
    async getSalle(@Param('id') id: string, @Res() response) {

        this.salleService.getById(id)
        .then((salle) => {
            response.status(200).json(salle)
        })
        .catch(e => {
            response.status(500).json({
                message: "Impossible de retrouver la salle'",
                e,
            });
        })
    }

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    async createSalle(@Body() newSalleDto: newSalleDto, @Res() response) {

        this.salleService.createNew(newSalleDto.label)
        .then((salle) => {
            response.status(200).json(salle)
        })
        .catch(e => {
            response.status(500).json({
                message: "Impossible d'ajouter une salle",
                e,
            });
        })
    }

    @Delete(':id')
    // @UseGuards(AuthGuard('jwt'))
    async deleteSalle(@Param('id') id: string, @Res() response) {

        this.salleService.deleteById(id)
        .then(() => {
            response.status(200).json({msg : "salle supprimée"})
        })
        .catch(e => {
            response.status(500).json({
                message: "Impossible de supprimer la salle'",
                e,
            });
        })
    }

}
import { Controller, Res, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AnneeService } from './annee.service';
import { AuthGuard } from '@nestjs/passport';
import { newYearDto } from "@gl4/api-interfaces"


@Controller('annee')
export class AnneeController {

    constructor(private anneeService: AnneeService) {}

    @Get()
    // @UseGuards(AuthGuard('jwt'))
    async getCurrentYear(@Res() response) {
        this.anneeService.getCurrent()
        .then((year) => {
            response.status(200).json(year)
        })
        .catch(e => {
            response.status(500).json({
                message: "Impossible de récupérer l'année'",
                e,
            });
        })
    }

    @Post()
    // @UseGuards(AuthGuard('jwt'))
    async login(@Body() newYearDto: newYearDto, @Res() response) {

        this.anneeService.getCurrent()
        .then((year) => {
            if(year && year.year > newYearDto.year) {
                response.status(400).json({message: "La nouvelle année devrait être plus grande que l'actuelle'"})
            }else {
                return this.anneeService.advanceYear(newYearDto.year)
            }
        }).then((year) => {
            response.status(200).json(year)
        })
        .catch(e => {
            response.status(500).json({
                message: "Impossible d'ajouter l'année'",
                e,
            });
        })
    }


}
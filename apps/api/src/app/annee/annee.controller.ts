import { Controller } from '@nestjs/common';
import { AnneeService } from './annee.service';

@Controller('annee')
export class AnneeController {

    constructor(private anneeService: AnneeService) {

    }


}
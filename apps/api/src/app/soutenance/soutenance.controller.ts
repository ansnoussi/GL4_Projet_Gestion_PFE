import { Controller } from '@nestjs/common';
import { SoutenanceService } from './soutenance.service';

@Controller('soutenance')
export class SoutenanceController {

    constructor(private soutenanceService: SoutenanceService) {

    }

}
import { Controller } from '@nestjs/common';

import { SujetService } from './sujet.service';

@Controller('sujet')
export class SujetController {

    constructor(private sujetService: SujetService) {

    }


}
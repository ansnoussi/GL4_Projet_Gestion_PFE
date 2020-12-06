import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntrepriseController } from './controllers/entreprise/entreprise.controller';
import { EtudiantController } from './controllers/etudiant/etudiant.controller';
import { EnseignantController } from './controllers/enseignant/enseignant.controller';

@Module({
  imports: [],
  controllers: [AppController, EntrepriseController, EtudiantController, EnseignantController],
  providers: [AppService],
})
export class AppModule {}

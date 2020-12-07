import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntrepriseController } from './controllers/entreprise/entreprise.controller';
import { EtudiantController } from './controllers/etudiant/etudiant.controller';
import { EnseignantController } from './controllers/enseignant/enseignant.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://gl4user:5CMsEASbsCmtuD4f@cluster0.awyx9.mongodb.net/projet-gl4?retryWrites=true&w=majority')],
  controllers: [AppController, EntrepriseController, EtudiantController, EnseignantController],
  providers: [AppService],
})
export class AppModule {}
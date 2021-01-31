import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//import mongoUrl from './config/db'
import { EntrepriseController } from './controllers/entreprise/entreprise.controller';
import { EtudiantController } from './controllers/etudiant/etudiant.controller';
import { EnseignantController } from './controllers/enseignant/enseignant.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { AdminModule } from "./admin/admin.module"

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    UsersModule,
    AdminModule
  ],
  controllers: [AppController, EntrepriseController, EtudiantController, EnseignantController],
  providers: [AppService],
})
export class AppModule { }

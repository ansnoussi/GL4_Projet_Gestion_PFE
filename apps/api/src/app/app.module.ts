import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//import mongoUrl from './config/db'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';

import { SujetModule } from './sujet/sujet.module';
import { SoutenanceModule } from './soutenance/soutenance.module';
import { SessionModule } from './session/session.module';
import { SalleModule } from './salle/salle.module';
import { AnneeModule } from './annee/annee.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    UsersModule,

    SujetModule,
    SoutenanceModule,
    SessionModule,
    SalleModule,
    AnneeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

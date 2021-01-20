import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//import mongoUrl from './config/db'
import { EtudiantController } from './controllers/etudiant/etudiant.controller';
import { EnseignantController } from './controllers/enseignant/enseignant.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, EtudiantController, EnseignantController],
  providers: [AppService],
})
export class AppModule {}

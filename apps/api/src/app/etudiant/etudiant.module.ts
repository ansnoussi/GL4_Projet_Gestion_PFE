import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EtudiantController } from './etudiant.controller';
import { EtudiantService } from './etudiant.service';
import { EtudiantSchema } from './schemas/etudiant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Etudiant', schema: EtudiantSchema}])
  ],
  exports: [EtudiantService],
  controllers: [EtudiantController],
  providers: [EtudiantService]
})
export class EtudiantModule {}
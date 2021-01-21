import { Module } from '@nestjs/common';
import { EtudiantController } from './etudiant.controller';
import { EtudiantService } from './etudiant.service';

@Module({
  imports: [

  ],
  exports: [EtudiantService],
  controllers: [EtudiantController],
  providers: [EtudiantService]
})
export class EtudiantModule {}
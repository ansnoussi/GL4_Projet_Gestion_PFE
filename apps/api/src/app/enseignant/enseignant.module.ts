import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnseignantController } from './enseignant.controller';
import { EnseignantService } from './enseignant.service';
import { EnseignantSchema } from './schemas/enseignant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Enseignant', schema: EnseignantSchema}])
  ],
  exports: [EnseignantService],
  controllers: [EnseignantController],
  providers: [EnseignantService]
})
export class EnseignantModule {}
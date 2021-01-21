import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnneeController } from './annee.controller';
import { AnneeService } from './annee.service';
import { AnneeSchema } from './schemas/annee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Annee', schema: AnneeSchema}])
  ],
  exports: [AnneeService],
  controllers: [AnneeController],
  providers: [AnneeService]
})
export class AnneeModule {}
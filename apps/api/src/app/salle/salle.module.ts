import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalleController } from './salle.controller';
import { SalleService } from './salle.service';
import { SalleSchema } from './schemas/salle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Salle', schema: SalleSchema}])
  ],
  exports: [SalleService],
  controllers: [SalleController],
  providers: [SalleService]
})
export class SalleModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SoutenanceController } from './soutenance.controller';
import { SoutenanceService } from './soutenance.service';
import { SoutenanceSchema } from './schemas/soutenance.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Soutenance', schema: SoutenanceSchema}]),

  ],
  exports: [SoutenanceService],
  controllers: [SoutenanceController],
  providers: [SoutenanceService]
})
export class SoutenanceModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { SalleSchema } from './schemas/salle.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Salle', schema: SalleSchema}]),
    
  ],
  exports: [AdminService],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
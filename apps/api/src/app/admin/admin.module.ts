import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { EnseignantSchema } from "../enseignant/schemas/enseignant.schema"
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Enseignant', schema: EnseignantSchema }]),
  ],
  exports: [AdminService],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule { }
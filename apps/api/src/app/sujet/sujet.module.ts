import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SujetController } from './sujet.controller';
import { SujetService } from './sujet.service';
import { SujetSchema } from './schemas/sujet.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Sujet', schema: SujetSchema}]),
  ],
  exports: [SujetService],
  controllers: [SujetController],
  providers: [SujetService]
})
export class SujetModule {}
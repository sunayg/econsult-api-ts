import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Doctor } from './doctor.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      { typegooseClass: Doctor, schemaOptions: { timestamps: true } }
    ])
  ],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule { }

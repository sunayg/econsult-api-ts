import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.model';
import { NedbModule } from '@hungtcs-box/nest-nedb';

@Module({
  imports: [
    NedbModule.forFeature({
      model: Doctor,
      indexes: {
        email: {
          unique: true,
        },
        medicalCouncilRegistration: {
          unique: true,
        }
      }
    })
  ],
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule { }

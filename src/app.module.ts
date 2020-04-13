import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/econsult", { useNewUrlParser: true, useUnifiedTopology: true }),
    DoctorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NedbModule } from '@hungtcs-box/nest-nedb';
import { DoctorModule } from './doctor/doctor.module';
import { join } from "path";

const homedir = require('os').homedir();

@Module({
  imports: [
    NedbModule.forRoot(join(homedir, '.econsult', 'data')),
    DoctorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

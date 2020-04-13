import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Doctor } from './doctor.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateDoctorDTO } from './dto/create-doctor.dto';

@Injectable()
export class DoctorService {

    constructor(@InjectModel(Doctor) private readonly doctorModel: ModelType<Doctor>) { }

    async list() {
        return this.doctorModel.find();
    }

    async read(email: string) {
        const doc = this.doctorModel.findOne({ email });
        if (!doc) { throw new NotFoundException('requested document does not exist') }
        return doc;
    }

    async create(doctor: CreateDoctorDTO) {
        return this.doctorModel.create(doctor);
    }
}

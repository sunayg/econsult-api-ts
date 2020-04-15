import { Injectable, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Doctor } from './doctor.model';
import { CreateDoctorDTO } from './dto/create-doctor.dto';
import { InjectDatastore } from '@hungtcs-box/nest-nedb';
import DataStore from 'nedb';
import { DoctorDTO } from './dto/doctor.dto';

@Injectable()
export class DoctorService {

    constructor(@InjectDatastore(Doctor) private readonly doctorModel: DataStore<Doctor>) { }

    async list() {
        return new Promise((res, rej) => {
            this.doctorModel.find({}, (err, doc) => {
                if (err) return rej(new InternalServerErrorException(err));
                res(doc);
            })
        })
    }

    async read(email: string) {
        return new Promise((res, rej) => {
            this.doctorModel.findOne({ email }, (err, doc) => {
                if (!doc) return rej(new NotFoundException('document does not exist'));
                if (err) return rej(err);
                res(doc);
            })
        })
    }

    async create(doctor: CreateDoctorDTO) {
        return new Promise((res, rej) => {
            this.doctorModel.insert(doctor as Doctor, (err, doc) => {
                if (err) rej(new ConflictException(err));
                res(doc);
            })
        })
    }

    async update(email: string, doctor: DoctorDTO) {
        return new Promise((res, rej) => {
            this.doctorModel.update({ email }, doctor, {}, (err, doc) => {
                if (err) return rej(new InternalServerErrorException(err));
                res(doc);
            })
        })
    }

    async remove(email: string) {
        return new Promise((res, rej) => {
            this.doctorModel.remove({ email }, (err, doc) => {
                if (err) return rej(new InternalServerErrorException(err));
                res(doc);
            });
        })
    }
}

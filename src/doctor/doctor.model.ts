import { Model } from '@hungtcs-box/nest-nedb';

export class Doctor extends Model {
    approved: boolean;
    emergencyCasesOnly: boolean;
    email: string;
    medicalCouncilRegistration: string;
    name: string;
    phone: string;
    qualifications: string;
    specialization: string;
    state: string;
    telegramID: string;
}
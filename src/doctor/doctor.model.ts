import { prop } from "@typegoose/typegoose";
export class Doctor {
    @prop()
    approved: boolean;
    @prop()
    emergencyCasesOnly: boolean;
    @prop()
    email: string;
    @prop()
    medicalCouncilRegistration: string;
    @prop()
    name: string;
    @prop()
    phone: string;
    @prop()
    qualifications: string;
    @prop()
    specialization: string;
    @prop()
    state: string;
    @prop()
    telegramID: string;
}
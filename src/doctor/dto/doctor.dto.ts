import { ApiProperty } from "@nestjs/swagger";

export class DoctorDTO {
    @ApiProperty()
    _id: string;
    @ApiProperty()
    approved: boolean;
    @ApiProperty()
    emergencyCasesOnly: boolean;
    @ApiProperty()
    email: string;
    @ApiProperty()
    medicalCouncilRegistration: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    qualifications: string;
    @ApiProperty()
    specialization: string;
    @ApiProperty()
    state: string;
    @ApiProperty()
    telegramID: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    modifiedAt: Date;
}
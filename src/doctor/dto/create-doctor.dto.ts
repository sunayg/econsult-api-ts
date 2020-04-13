import { ApiProperty } from "@nestjs/swagger";

export class CreateDoctorDTO {
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

}
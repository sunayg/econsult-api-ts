import { Controller, Get, Param, Post, Body, Inject } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { DoctorDTO } from './dto/doctor.dto';
import { CreateDoctorDTO } from './dto/create-doctor.dto';
import { DoctorService } from './doctor.service';
@ApiTags('doctor')
@Controller('doctor')
export class DoctorController {

    constructor(@Inject(DoctorService) private readonly doctorService: DoctorService) {}

    @ApiOkResponse({ type: DoctorDTO, isArray: true })
    @Get('')
    async list() {
        return this.doctorService.list()
    }

    @ApiOkResponse({ type: DoctorDTO })
    @Get(':email')
    async read(@Param('email') email: string) {
        return this.doctorService.read(email);
    }
    
    @ApiCreatedResponse({ type: DoctorDTO })
    @Post('')
    async create(@Body() body: CreateDoctorDTO) {
        return this.doctorService.create(body);
    }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var swagger_1 = require("@nestjs/swagger");
var CreateDoctorDTO = /** @class */ (function () {
    function CreateDoctorDTO() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDoctorDTO.prototype, "emergencyCasesOnly");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDoctorDTO.prototype, "email");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDoctorDTO.prototype, "medicalCouncilRegistration");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDoctorDTO.prototype, "name");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDoctorDTO.prototype, "phone");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDoctorDTO.prototype, "qualifications");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDoctorDTO.prototype, "specialization");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDoctorDTO.prototype, "state");
    __decorate([
        swagger_1.ApiProperty()
    ], CreateDoctorDTO.prototype, "telegramID");
    return CreateDoctorDTO;
}());
exports.CreateDoctorDTO = CreateDoctorDTO;

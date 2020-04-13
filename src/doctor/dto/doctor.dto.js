"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var swagger_1 = require("@nestjs/swagger");
var DoctorDTO = /** @class */ (function () {
    function DoctorDTO() {
    }
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "_id");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "approved");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "emergencyCasesOnly");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "email");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "medicalCouncilRegistration");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "name");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "phone");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "qualifications");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "specialization");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "state");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "telegramID");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "createdAt");
    __decorate([
        swagger_1.ApiProperty()
    ], DoctorDTO.prototype, "modifiedAt");
    return DoctorDTO;
}());
exports.DoctorDTO = DoctorDTO;

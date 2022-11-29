"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EducationModule = void 0;
var common_1 = require("@nestjs/common");
var education_controller_1 = require("./education.controller");
var education_service_1 = require("./education.service");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("../../../../../../../../../src/typeorm");
var EducationModule = /** @class */ (function () {
    function EducationModule() {
    }
    EducationModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([typeorm_2.Profile]),
                typeorm_1.TypeOrmModule.forFeature([typeorm_2.Education]),
            ],
            controllers: [education_controller_1.EducationController],
            providers: [education_service_1.EducationService]
        })
    ], EducationModule);
    return EducationModule;
}());
exports.EducationModule = EducationModule;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfilesModule = void 0;
var common_1 = require("@nestjs/common");
var profiles_controller_1 = require("./profiles.controller");
var profiles_service_1 = require("./profiles.service");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("../../../../../../../../../src/typeorm");
var ProfilesModule = /** @class */ (function () {
    function ProfilesModule() {
    }
    ProfilesModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([typeorm_2.Profile]),
                typeorm_1.TypeOrmModule.forFeature([typeorm_2.User]),
                typeorm_1.TypeOrmModule.forFeature([typeorm_2.Education]),
            ],
            controllers: [profiles_controller_1.ProfilesController],
            providers: [profiles_service_1.ProfilesService]
        })
    ], ProfilesModule);
    return ProfilesModule;
}());
exports.ProfilesModule = ProfilesModule;

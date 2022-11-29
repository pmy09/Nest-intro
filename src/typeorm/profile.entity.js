"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Profile = exports.MaritalStatus = void 0;
var typeorm_1 = require("typeorm");
var education_entity_1 = require("./education.entity");
var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus["SINGLE"] = "single";
    MaritalStatus["MARRIED"] = "married";
})(MaritalStatus = exports.MaritalStatus || (exports.MaritalStatus = {}));
var Profile = /** @class */ (function () {
    function Profile() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], Profile.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            "default": 0
        })
    ], Profile.prototype, "age");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            "default": ''
        })
    ], Profile.prototype, "address");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            "default": ''
        })
    ], Profile.prototype, "country");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            type: 'enum',
            "enum": ['male', 'female', 'complicated'],
            "default": 'male'
        })
    ], Profile.prototype, "gender");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            type: 'enum',
            "enum": MaritalStatus,
            "default": MaritalStatus.SINGLE
        })
    ], Profile.prototype, "marital_status");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return education_entity_1.Education; }, function (education) { return education.profile; }),
        (0, typeorm_1.JoinColumn)()
    ], Profile.prototype, "education");
    Profile = __decorate([
        (0, typeorm_1.Entity)()
    ], Profile);
    return Profile;
}());
exports.Profile = Profile;

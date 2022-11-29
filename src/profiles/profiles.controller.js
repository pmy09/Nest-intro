"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ProfilesController = void 0;
var common_1 = require("@nestjs/common");
var ProfilesController = /** @class */ (function () {
    function ProfilesController(profilesService) {
        this.profilesService = profilesService;
    }
    ProfilesController.prototype.addProfile = function (userId, createProfileDto) {
        return this.profilesService.createProfile(userId, createProfileDto);
    };
    ProfilesController.prototype.fetchProfile = function (profileId) {
        return this.profilesService.getProfile(profileId);
    };
    ProfilesController.prototype.updateProduct = function (profileId, updateProfileDto) {
        return this.profilesService.updateProfile(profileId, updateProfileDto);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)('userId')),
        __param(1, (0, common_1.Body)())
    ], ProfilesController.prototype, "addProfile");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProfilesController.prototype, "fetchProfile");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ProfilesController.prototype, "updateProduct");
    ProfilesController = __decorate([
        (0, common_1.Controller)('profiles')
    ], ProfilesController);
    return ProfilesController;
}());
exports.ProfilesController = ProfilesController;

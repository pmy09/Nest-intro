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
exports.UsersController = void 0;
var common_1 = require("@nestjs/common");
var UsersController = /** @class */ (function () {
    function UsersController(usersService) {
        this.usersService = usersService;
    }
    UsersController.prototype.addUser = function (createUserDto) {
        return this.usersService.createUser(createUserDto);
    };
    UsersController.prototype.getAllUsers = function () {
        return this.usersService.getUsers();
    };
    UsersController.prototype.getProduct = function (userId) {
        return this.usersService.getSingleUser(userId);
    };
    UsersController.prototype.authorizeUser = function (email, password) {
        return this.usersService.login(email, password);
    };
    //   @Patch(':id')
    //   updateProduct(
    //     @Param('id') prodId: number,
    //     @Body() updateProductDto: CreateProductDto,
    //   ) {
    //     return this.productsService.updateProduct(prodId, updateProductDto);
    //   }
    UsersController.prototype.deleteProduct = function (userId) {
        return this.usersService.deleteUser(userId);
    };
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.UsePipes)(new common_1.ValidationPipe()),
        __param(0, (0, common_1.Body)())
    ], UsersController.prototype, "addUser");
    __decorate([
        (0, common_1.Get)()
    ], UsersController.prototype, "getAllUsers");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UsersController.prototype, "getProduct");
    __decorate([
        (0, common_1.Post)('login'),
        __param(0, (0, common_1.Body)('email')),
        __param(1, (0, common_1.Body)('password'))
    ], UsersController.prototype, "authorizeUser");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UsersController.prototype, "deleteProduct");
    UsersController = __decorate([
        (0, common_1.Controller)('users')
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;

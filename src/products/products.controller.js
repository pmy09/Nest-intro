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
exports.ProductsController = void 0;
var common_1 = require("@nestjs/common");
var ProductsController = /** @class */ (function () {
    function ProductsController(productsService) {
        this.productsService = productsService;
    }
    ProductsController.prototype.addProduct = function (createProductDto) {
        return this.productsService.createProduct(createProductDto);
        // return { id: genId };
    };
    ProductsController.prototype.getAllProducts = function () {
        return this.productsService.getProducts();
    };
    ProductsController.prototype.getProduct = function (prodId) {
        return this.productsService.getSingleProduct(prodId);
    };
    ProductsController.prototype.updateProduct = function (prodId, updateProductDto) {
        return this.productsService.updateProduct(prodId, updateProductDto);
    };
    ProductsController.prototype.deleteProduct = function (prodId) {
        this.productsService.deleteProduct(prodId);
        return null;
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ProductsController.prototype, "addProduct");
    __decorate([
        (0, common_1.Get)()
    ], ProductsController.prototype, "getAllProducts");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProductsController.prototype, "getProduct");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ProductsController.prototype, "updateProduct");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ProductsController.prototype, "deleteProduct");
    ProductsController = __decorate([
        (0, common_1.Controller)('products')
    ], ProductsController);
    return ProductsController;
}());
exports.ProductsController = ProductsController;

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateProductDto } from './products.dtos';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  addProduct(@Body() createProductDto: CreateProductDto): any {
    return this.productsService.createProduct(createProductDto);
    // return { id: genId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: number) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: number,
    @Body() updateProductDto: CreateProductDto,
  ) {
    return this.productsService.updateProduct(prodId, updateProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') prodId: number) {
    this.productsService.deleteProduct(prodId);
    return null;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './products.dtos';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  createProduct(createProductDto: CreateProductDto) {
    // const prodId = Math.random().toString();
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
    // return prodId;
  }

  getProducts() {
    return this.productRepository.find();
  }

  getSingleProduct(productId: number) {
    return this.findProduct(productId);
  }

  async updateProduct(productId: number, updateProductDto: CreateProductDto) {
    const product = await this.findProduct(productId);
    if (updateProductDto.title) {
      product.title = updateProductDto.title;
    }
    if (updateProductDto.description) {
      product.description = updateProductDto.description;
    }
    if (updateProductDto.price) {
      product.price = updateProductDto.price;
    }
    return this.productRepository.save(product);
  }

  async deleteProduct(productId: number) {
    const product = await this.findProduct(productId);
    this.productRepository.delete(product);
  }

  private async findProduct(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }
}

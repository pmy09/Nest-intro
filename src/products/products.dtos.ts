// import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateProductDto {
  title: string;
  description: string;
  price: number;
}

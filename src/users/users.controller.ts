import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './users.dtos';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  addUser(@Body() createUserDto: CreateUserDto): any {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getProduct(@Param('id') userId: string) {
    return this.usersService.getSingleUser(userId);
  }

  @Post('login')
  authorizeUser(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.usersService.login(email, password);
  }

  //   @Patch(':id')
  //   updateProduct(
  //     @Param('id') prodId: number,
  //     @Body() updateProductDto: CreateProductDto,
  //   ) {
  //     return this.productsService.updateProduct(prodId, updateProductDto);
  //   }

  @Delete(':id')
  deleteProduct(@Param('id') userId: string) {
    return this.usersService.deleteUser(userId);
  }
}

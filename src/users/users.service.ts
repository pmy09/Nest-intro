import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateAuthToken } from 'src/helpers/generateAuthToken';
import { hashPassword } from 'src/helpers/hashPassword';
import { Profile, User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const existsUser = await this.userRepository.findOneBy({ email });
    console.log(existsUser);
    if (existsUser) {
      throw new BadRequestException('Email already exists');
    }
    createUserDto.password = hashPassword(password);

    const newUser = this.userRepository.create(createUserDto);
    this.userRepository.save(newUser);
    return 'User successfully created';
  }

  getUsers() {
    return this.userRepository.find({
      select: ['id', 'name', 'email', 'role', 'profile'],
      relations: ['profile'],
    });
  }

  async getSingleUser(userId: string) {
    const user = await this.findUser(userId);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      profile: user.profile,
    };
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    const hashedPassword = await hashPassword(password);
    if (user.password !== hashedPassword) {
      throw new BadRequestException('Invalid credentials');
    }
    const token = await generateAuthToken(user.id);
    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        profile: user.profile,
      },
    };
  }

  //   async updateProduct(productId: number, updateProductDto: CreateProductDto) {
  //     const product = await this.findProduct(productId);
  //     if (updateProductDto.title) {
  //       product.title = updateProductDto.title;
  //     }
  //     if (updateProductDto.description) {
  //       product.description = updateProductDto.description;
  //     }
  //     if (updateProductDto.price) {
  //       product.price = updateProductDto.price;
  //     }
  //     return this.productRepository.save(product);
  //   }

  async deleteUser(userId: string) {
    const user = await this.findUser(userId);
    this.userRepository.delete(user);
    return 'User deleted';
  }

  // async findUser(id: string) {
  //   const user = await this.userRepository.findOneBy({ id });
  //   console.log(user)
  //   if (!user) {
  //     throw new NotFoundException('Could not find user.');
  //   }
  //   return user;
  // }

  async findUser(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      select: ['id', 'name', 'email', 'role', 'profile'],
      relations: ['profile'],
    });
    console.log(user);
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }
}

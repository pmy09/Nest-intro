import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from 'src/typeorm/user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  role: Role;
}

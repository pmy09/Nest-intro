import { Gender, MaritalStatus } from 'src/typeorm/profile.entity';

export class CreateProfileDto {
  age: number;
  address: string;
  country: string;
  gender: Gender;
  marital_status: MaritalStatus;
}

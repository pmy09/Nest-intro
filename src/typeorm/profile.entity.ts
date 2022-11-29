import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Education } from './education.entity';
export type Gender = 'male' | 'female' | 'complicated';
export enum MaritalStatus {
  SINGLE = 'single',
  MARRIED = 'married',
}

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    default: 0,
  })
  age: number;

  @Column({
    nullable: false,
    default: '',
  })
  address: string;

  @Column({
    nullable: false,
    default: '',
  })
  country: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['male', 'female', 'complicated'],
    default: 'male',
  })
  gender: Gender;

  @Column({
    nullable: false,
    type: 'enum',
    enum: MaritalStatus,
    default: MaritalStatus.SINGLE,
  })
  marital_status: MaritalStatus;

  @OneToMany(() => Education, (education) => education.profile)
  @JoinColumn()
  education: Education[];
}

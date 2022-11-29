import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';
export type Role = 'user' | 'admin';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['user', 'admin'],
    default: 'user',
  })
  role: Role;

  @OneToOne((type) => Profile, { cascade: true })
  @JoinColumn()
  profile: Profile;
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class Education {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    default: '',
  })
  institution: string;

  @Column({
    nullable: false,
    default: '',
  })
  degree: string;

  @Column({
    nullable: false,
    default: '',
  })
  grade: string;

  @Column({
    type: 'date',
    nullable: false,
    default: () => 'NOW()',
  })
  start: string;

  @Column({
    type: 'date',
    nullable: false,
    default: () => 'NOW()',
  })
  end: string;

  @ManyToOne(() => Profile, { cascade: true })
  profile: Profile;
}

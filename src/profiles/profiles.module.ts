import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile, User, Education } from 'src/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Education]),
  ],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}

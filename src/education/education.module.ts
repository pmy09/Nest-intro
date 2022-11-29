import { Module } from '@nestjs/common';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile, Education } from 'src/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    TypeOrmModule.forFeature([Education]),
  ],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}

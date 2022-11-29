import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateEducationDto } from './education.dtos';
import { EducationService } from './education.service';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}
  @Post(':profileId')
  addEducation(
    @Param('profileId') profileId: string,
    @Body() createEducationDto: CreateEducationDto,
  ): any {
    return this.educationService.createEducation(profileId, createEducationDto);
  }

  //   @Patch(':id')
  //   updateProduct(
  //     @Param('id') profileId: string,
  //     @Body() updateProfileDto: EducationService,
  //   ) {
  //     return this.educationService.updateProfile(profileId, updateProfileDto);
  //   }

  //   @Delete(':id')
  //   deleteProduct(@Param('id') userId: string) {
  //     this.usersService.deleteUser(userId);
  //     return null;
  //   }
}

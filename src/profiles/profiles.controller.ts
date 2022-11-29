import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateProfileDto } from './profiles.dtos';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}
  @Post()
  addProfile(
    @Body('userId') userId: string,
    @Body() createProfileDto: CreateProfileDto,
  ): any {
    return this.profilesService.createProfile(userId, createProfileDto);
  }

  @Get(':id')
  fetchProfile(@Param('id') profileId: string) {
    return this.profilesService.getProfile(profileId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') profileId: string,
    @Body() updateProfileDto: CreateProfileDto,
  ) {
    return this.profilesService.updateProfile(profileId, updateProfileDto);
  }

  //   @Delete(':id')
  //   deleteProduct(@Param('id') userId: string) {
  //     this.usersService.deleteUser(userId);
  //     return null;
  //   }
}

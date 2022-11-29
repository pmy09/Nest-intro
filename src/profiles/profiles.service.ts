import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateAuthToken } from 'src/helpers/generateAuthToken';
import { hashPassword } from 'src/helpers/hashPassword';
import { Profile, User } from 'src/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './profiles.dtos';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async createProfile(id: string, createProfileDto: CreateProfileDto) {
    // const user = await UsersService.prototype.findUser(id);
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new BadRequestException('Invalid user id');
    }

    const newProfile = await this.profileRepository.create(createProfileDto);
    await this.profileRepository.save(newProfile);
    user.profile = newProfile;
    await this.userRepository.save(user);
    return 'Profile successfully created';
  }

  getProfile(id: string) {
    return this.profileRepository.find({
      where: { id },
      relations: ['education'],
    });
  }

  async updateProfile(profileId: string, updateProfileDto: CreateProfileDto) {
    const profile = await this.findProfile(profileId);
    profile.address =
      updateProfileDto.address == null
        ? profile.address
        : updateProfileDto.address;
    profile.age =
      updateProfileDto.age == null ? profile.age : updateProfileDto.age;
    profile.country =
      updateProfileDto.country == null
        ? profile.country
        : updateProfileDto.country;
    profile.gender =
      updateProfileDto.gender == null
        ? profile.gender
        : updateProfileDto.gender;
    profile.marital_status =
      updateProfileDto.marital_status == null
        ? profile.marital_status
        : updateProfileDto.marital_status;
    return this.profileRepository.save(profile);
  }

  private async findProfile(id: string) {
    const profile = await this.profileRepository.findOneBy({ id });
    if (!profile) {
      throw new NotFoundException('Could not find profile.');
    }
    return profile;
  }
}

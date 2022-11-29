import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { format, parseISO } from 'date-fns';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile, Education } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateEducationDto } from './education.dtos';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private readonly educationRepository: Repository<Education>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}
  async createEducation(id: string, createEducationDto: CreateEducationDto) {
    // const user = await UsersService.prototype.findUser(id);
    const profile = await this.profileRepository.findOne({
      where: { id },
      relations: ['education'],
    });
    if (!profile) {
      throw new BadRequestException('Invalid profile id');
    }

    const newEducation = await this.educationRepository.create(
      createEducationDto,
    );
    await this.educationRepository.save(newEducation);
    console.log(profile);
    profile.education.push(newEducation);
    await this.profileRepository.save(profile);
    return 'Education successfully added';
    // const res = format(parseISO(createEducationDto.start), 'dd/MM/yyyy pp');
  }

  //   async updateProfile(profileId: string, updateProfileDto: CreateProfileDto) {
  //     const profile = await this.findProfile(profileId);
  //     profile.address =
  //       updateProfileDto.address == null
  //         ? profile.address
  //         : updateProfileDto.address;
  //     profile.age =
  //       updateProfileDto.age == null ? profile.age : updateProfileDto.age;
  //     profile.country =
  //       updateProfileDto.country == null
  //         ? profile.country
  //         : updateProfileDto.country;
  //     profile.gender =
  //       updateProfileDto.gender == null
  //         ? profile.gender
  //         : updateProfileDto.gender;
  //     profile.marital_status =
  //       updateProfileDto.marital_status == null
  //         ? profile.marital_status
  //         : updateProfileDto.marital_status;
  //     return this.profileRepository.save(profile);
  //   }

  //   private async findProfile(id: string) {
  //     const profile = await this.profileRepository.findOneBy({ id });
  //     if (!profile) {
  //       throw new NotFoundException('Could not find profile.');
  //     }
  //     return profile;
  //   }
}

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateBookingDto } from './booking.dtos';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}
  // @Post(':profileId')
  // addBooking(
  //   @Param('profileId') profileId: string,
  //   @Body() createBookingDto: CreateBookingDto,
  // ): any {
  //   return this.bookingService.createBooking(profileId, createBookingDto);
  // }

  @Get(':cityCode')
  getHotels(@Param('cityCode') city: string): any {
    return this.bookingService.getHotels(city);
  }

  @Get('cities/:city')
  getCity(@Param('city') city: string): any {
    return this.bookingService.getCity(city);
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

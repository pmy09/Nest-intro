import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Headers,
  Req,
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

  @Get('hotels/:hotelId')
  getHotelOffer(@Param('hotelId') hotelId: string): any {
    return this.bookingService.getOffer(hotelId);
  }

  @Post('activities')
  getActivity(@Body() body: CreateBookingDto): any {
    return this.bookingService.getActivities(body.geoCode);
  }

  @Post('order')
  makeBooking(
    @Body() body: CreateBookingDto,
    @Headers() headers: Record<string, string>,
    @Req() req: Request,
  ): any {
    // console.log('headers', req);
    return this.bookingService.bookHotel(body.booking2);
  }
}

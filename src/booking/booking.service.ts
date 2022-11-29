import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { format, parseISO } from 'date-fns';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './booking.dtos';
// import { Amadeus } from 'amadeus';
import Amadeus from 'amadeus';

const ama = new Amadeus({
  clientId: 'fK5yggC9M9kAzy1AibAX9ks6lMGb6aON',
  clientSecret: 'nuQVRHeHuvRzF9sq',
});

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}
  // async createBooking(id: string, createBookingDto: CreateBookingDto) {
  //   // const user = await UsersService.prototype.findUser(id);
  //   const profile = await this.bookingRepository.findOne({
  //     where: { id },
  //     relations: ['Booking'],
  //   });
  //   if (!profile) {
  //     throw new BadRequestException('Invalid profile id');
  //   }

  //   const newBooking = await this.bookingRepository.create(createBookingDto);
  //   await this.bookingRepository.save(newBooking);
  //   return 'Booking successfully added';
  // }

  async getHotels(city: string) {
    const hotels = [];
    let count: number;
    const data = await ama.referenceData.locations.hotels.byCity.get({
      cityCode: city,
    });
    // console.log('data', data);
    data.result.data.map(async (element, index) => {
      const locale = {
        name: element.name,
        hotelId: element.hotelId,
        geocode: element.geocode,
        countryCode: element.address.countryCode,
      };
      hotels.push(locale);

      if (index == data.result.data.length - 1) {
        count = hotels.length;
      }
    });
    return { hotels, count };
  }

  async getCity(city: string) {
    const cities = [];
    let count: number;
    const data = await ama.referenceData.locations.cities.get({
      keyword: city,
    });
    data.result.data.map(async (element, index) => {
      const locale = {
        name: element.name,
        countryCode: element.address.countryCode,
      };
      cities.push(locale);

      if (index == data.result.data.length - 1) {
        count = cities.length;
      }
    });
    return { cities, count };
  }
}

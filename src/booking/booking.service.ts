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
  logLevel: 'debug',
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
        geoCode: element.geoCode,
      };
      cities.push(locale);

      if (index == data.result.data.length - 1) {
        count = cities.length;
      }
    });
    return { cities, count };
  }

  async getOffer(hotelId: string) {
    const data = await ama.shopping.hotelOffersSearch.get({
      hotelIds: hotelId,
      adults: 3, // Only provides one offer based on number of adults chosen. Default is one adult
    });
    return data.result.data;
  }

  async getActivities(geoCode: any) {
    const activities = await ama.shopping.activities.get(geoCode);
    return activities.result.data;
  }

  async bookHotel(booking: { hotelIds: string; adults: string }) {
    try {
      console.log(booking);
      const offers = await ama.shopping.hotelOffersSearch.get(booking);
      return offers;
    } catch (error) {
      // console.log(error);
    }

    // ama.shopping.hotelOffers
    //   .get({
    //     cityCode: 'LON',
    //   })
    //   .then(function (hotels) {
    //     return ama.shopping.hotelOffersByHotel.get({
    //       hotelId: hotels.data[0].hotel.hotelId,
    //       checkInDate: '2020-12-10',
    //       checkOutDate: '2020-12-12',
    //     });
    //   })
    //   .then(function (hotelOffers) {
    //     return ama.shopping.hotelOffer(hotelOffers.data.offers[0].id).get();
    //   })
    //   .then(function (pricingResponse) {
    //     return ama.booking.hotelBookings.post(
    //       JSON.stringify({
    //         data: {
    //           offerId: pricingResponse.data.offers[0].id,
    //           guests: [
    //             {
    //               id: 1,
    //               name: {
    //                 title: 'MR',
    //                 firstName: 'BOB',
    //                 lastName: 'SMITH',
    //               },
    //               contact: {
    //                 phone: '+33679278416',
    //                 email: 'bob.smith@email.com',
    //               },
    //             },
    //           ],
    //           payments: [
    //             {
    //               id: 1,
    //               method: 'creditCard',
    //               card: {
    //                 vendorCode: 'VI',
    //                 cardNumber: '4151289722471370',
    //                 expiryDate: '2022-08',
    //               },
    //             },
    //           ],
    //         },
    //       }),
    //     );
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     console.error(response);
    //   });
  }
}

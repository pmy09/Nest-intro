export class CreateBookingDto {
  geoCode: {
    latitude: number;
    longitude: number;
  };
  booking: {
    hotelId: string;
    checkInDate: string;
    checkOutDate: string;
  };
  booking2: {
    hotelIds: string;
    adults: string;
  };
}

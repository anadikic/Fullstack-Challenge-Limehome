import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { GetBookingsFilterDto } from './dto/get-bookings-filter.dto';

@Controller('booking')
export class BookingController {
  private logger = new Logger('Booking logger');

  constructor(private bookingService: BookingService) {}

  @Post()
  createBooking(
    @Body()
    createBookingDto: CreateBookingDto,
  ): Promise<Booking> {
    this.logger.verbose(
      `Creating new booking. Filters: ${JSON.stringify(createBookingDto)}`,
    );

    return this.bookingService.createBooking(createBookingDto);
  }

  @Get()
  getBookings(@Query() filterDto: GetBookingsFilterDto): Promise<Booking[]> {
    this.logger.verbose(
      `Retreiving all bookings. Filters: ${JSON.stringify(filterDto)}`,
    );

    return this.bookingService.getBookings(filterDto);
  }

  @Get('countries')
  getCountries(): Promise<any> {
    this.logger.verbose(`Retreiving all countries.}`);

    return this.bookingService.getCountries();
  }
}

import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { GetBookingsFilterDto } from './dto/get-bookings-filter.dto';
import { BookingValidationPipe } from './pipes/booking-dates-validation.pipe';
import { ApiQuery } from '@nestjs/swagger';

@Controller('booking')
export class BookingController {
  private logger = new Logger('Booking logger');

  constructor(private bookingService: BookingService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBooking(
    @Body(BookingValidationPipe)
    createBookingDto: CreateBookingDto,
  ): Promise<Booking> {
    this.logger.verbose(
      `Creating new booking. Filters: ${JSON.stringify(createBookingDto)}`,
    );

    return this.bookingService.createBooking(createBookingDto);
  }

  @Get()
  @ApiQuery({ name: 'searchTerm', required: false })
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

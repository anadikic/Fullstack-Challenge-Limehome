import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

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
}

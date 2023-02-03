import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { GetBookingsFilterDto } from './dto/get-bookings-filter.dto';
import { getCountries } from 'node-countries';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}

  async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingRepository.save(createBookingDto);
  }

  async getBookings(filterDto?: GetBookingsFilterDto): Promise<Booking[]> {
    const { searchTerm } = filterDto;
    if (searchTerm) {
      return this.bookingRepository.find({
        where: [
          {
            firstName: Like(`${searchTerm}%`),
          },
          { lastName: Like(`${searchTerm}%`) },
        ],
        order: { checkInDate: 'ASC' },
      });
    } else {
      return this.bookingRepository.find({ order: { checkInDate: 'ASC' } });
    }
  }

  async getCountries(): Promise<any> {
    let countries = getCountries();
    countries.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return countries;
  }
}

import { BadRequestException, PipeTransform } from '@nestjs/common';
import { isPostalCode } from 'class-validator';
import { isPossiblePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';

export class BookingValidationPipe implements PipeTransform {
  transform(createBookingDto) {
    const {
      phoneNumber,
      postalCode,
      countryCode,
      checkInDate,
      checkOutDate,
    } = createBookingDto;

    this.validateDates(checkInDate, checkOutDate);

    this.validatePhoneNumber(phoneNumber, countryCode);

    this.validatePostalCode(postalCode, countryCode);

    return createBookingDto;
  }

  private validateDates(date1, date2) {
    const tempDate2 = new Date(date2);
    const tempDate1 = new Date(date1);
    const dateNow = new Date(Date.now());


    if (tempDate1.getDate() < dateNow.getDate()) {
      throw new BadRequestException(`Checkin date can't be in the past.`);
    }

    if (tempDate2 < tempDate1) {
      throw new BadRequestException(
        `Checkin date can't be equal or after checkout date.`,
      );
    }
  }

  validatePhoneNumber(phoneNumber: string, countryCode: any) {
    if (
      !isPossiblePhoneNumber(phoneNumber, countryCode) ||
      !isValidPhoneNumber(phoneNumber, countryCode)
    ) {
      throw new BadRequestException(`Please enter a valid phone number.`);
    }

    return;
  }

  validatePostalCode(postalCode: string, countryCode: any) {
    if (!isPostalCode(postalCode, countryCode)) {
      throw new BadRequestException(`Please enter a valid postal code.`);
    }

    return;
  }
}

import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsDateString,
  IsDefined,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  @IsDateString()
  checkInDate: Date;

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  checkOutDate: Date;

  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  numberOfGuests: number;

  @IsString()
  @IsDefined()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  @IsAlphanumeric()
  firstName: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsAlphanumeric()
  lastName: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  billingAddress: string;

  @IsString()
  @MinLength(4)
  @MaxLength(100)
  billingCountry: string;

  @IsString()
  @MaxLength(20)
  countryCode: string;

  @IsNotEmpty()
  postalCode: number;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsAlphanumeric()
  city: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  phoneNumber: string;
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from './book-suite/booking.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [BookingModule, TypeOrmModule.forRoot(typeOrmConfig)],
  providers: [],
})
export class AppModule {}

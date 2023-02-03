import { IsOptional } from 'class-validator';

export class GetBookingsFilterDto {
  @IsOptional()
  searchTerm: string;
}

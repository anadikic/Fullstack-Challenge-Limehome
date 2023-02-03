import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  checkInDate: Date;

  @Column()
  checkOutDate: Date;

  @Column()
  numberOfGuests: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  billingAddress: string;

  @Column()
  billingCountry: string;

  @Column()
  postalCode: number;

  @Column()
  city: string;

  @Column()
  phoneNumber: string;
}

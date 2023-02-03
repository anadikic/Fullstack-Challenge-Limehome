import { HttpClientTestingModule } from '@angular/common/http/testing'
import { inject, TestBed } from '@angular/core/testing'
import { BookingCommonModule } from '../../booking-common.module'
import { RestApiService } from '../rest-api/rest-api.service'
import { BookingListService } from './booking-list.service'

const bookings = [
  {
    id: 19,
    checkInDate: '2023-02-01T00:00:00.000Z',
    checkOutDate: '2023-02-02T23:59:59.000Z',
    numberOfGuests: 3,
    email: 'abubanja@gmail.com',
    firstName: 'Ana',
    lastName: 'Dikic',
    billingAddress: 'Ljubivoja Gajica 27A',
    billingCountry: 'Germany',
    postalCode: 11233,
    city: 'Ralja',
    phoneNumber: '+381641617196',
  },
  {
    id: 4,
    checkInDate: '2023-02-02T00:00:00.000Z',
    checkOutDate: '2023-02-24T23:59:59.000Z',
    numberOfGuests: 3,
    email: 'abubanja@gmail.com',
    firstName: 'Ana',
    lastName: 'Dikic',
    billingAddress: 'Ljubivoja Gajica 27A',
    billingCountry: 'United States',
    postalCode: 11233,
    city: 'Ralja',
    phoneNumber: '18005550000',
  },
  {
    id: 20,
    checkInDate: '2023-02-02T00:00:00.000Z',
    checkOutDate: '2023-02-04T23:59:59.000Z',
    numberOfGuests: 3,
    email: 'abubanja@gmail.com',
    firstName: 'Ana',
    lastName: 'Dikic',
    billingAddress: 'Ljubivoja Gajica 27A',
    billingCountry: 'Germany',
    postalCode: 11233,
    city: 'Ralja',
    phoneNumber: '+381641617196',
  },
  {
    id: 24,
    checkInDate: '2023-02-02T00:00:00.000Z',
    checkOutDate: '2023-02-04T23:59:59.000Z',
    numberOfGuests: 3,
    email: 'loremIpsum@dolor.ame',
    firstName: 'Lorem',
    lastName: 'Dolor',
    billingAddress: 'Große Straße 42',
    billingCountry: 'Germany',
    postalCode: 12345,
    city: 'Ispumhausen',
    phoneNumber: '02153464535',
  },
]

describe('BookingListService', () => {
  let restApi: RestApiService
  let service: BookingListService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BookingCommonModule.forRoot()],
      providers: [],
    })

    restApi = TestBed.inject(RestApiService)
    service = new BookingListService(restApi)
  })

  it('should be created', inject(
    [BookingListService],
    (service: BookingListService) => {
      expect(service).toBeTruthy()
    },
  ))

  it('Get bookings', (done) => {
    spyOn(restApi, 'requestGET').and.returnValue(Promise.resolve(bookings))
    service.getAllBookings().then((res) => {
      if (res) {
        expect(res).toEqual(bookings)
        done()
      }
    })
  })
})

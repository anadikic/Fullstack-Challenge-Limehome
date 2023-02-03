import { HttpClientTestingModule } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed } from '@angular/core/testing'
import { BookingCommonModule } from '../../booking-common.module'
import { RestApiService } from '../rest-api/rest-api.service'
import { BookingFormService } from './booking-form.service'

const booking = {
  checkInDate: '2023-02-01T00:00:00.000Z',
  checkOutDate: '2023-02-02T23:59:59.000Z',
  numberOfGuests: 3,
  email: 'abubanja@gmail.com',
  firstName: 'Ana',
  lastName: 'Dikic',
  billingAddress: 'Ljubivoja Gajica 27A',
  billingCountry: 'Germany',
  postalCode: '11233',
  city: 'Ralja',
  phoneNumber: '+381641617196',
  countryCode: 'DE',
}

describe('BookingFormService', () => {
  let restApi: RestApiService
  let service: BookingFormService
  let save

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BookingCommonModule.forRoot()],
      providers: [],
    })
    restApi = TestBed.inject(RestApiService)
    service = new BookingFormService(restApi)
  }))

  it('should be created', inject(
    [BookingFormService],
    (service: BookingFormService) => {
      expect(service).toBeTruthy()
    },
  ))

  it('Create booking', fakeAsync(async () => {
    spyOn(service, 'createBooking').and.returnValue(Promise.resolve(booking))

    const result = await service.createBooking(booking)

    expect(service.createBooking).toHaveBeenCalledWith(booking)
    expect(result).toEqual(booking)
  }))
})
function done() {
  throw new Error('Function not implemented.')
}

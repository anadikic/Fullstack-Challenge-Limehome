import { Injectable } from '@angular/core'
import { BookingDetails } from 'models/bookingDetails'
import { environment } from 'src/environments/environment.development'
import { RestApiService } from '../rest-api/rest-api.service'

@Injectable({
  providedIn: 'root',
})
export class BookingListService {
  constructor(private _restApiService: RestApiService) {}

  public getAllBookings() {
    const url = `${environment.APIEndpoint}booking`

    return this._restApiService
      .requestGET<BookingDetails>(url, null, false)
      .then(
        (bookings) => {
          return bookings
        },
        (error) => {
          return error
        },
      )
  }
}

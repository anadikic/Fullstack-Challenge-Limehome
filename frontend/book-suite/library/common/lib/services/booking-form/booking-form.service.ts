import { Injectable } from '@angular/core'
import { BookingDetails } from 'models/bookingDetails'
import { environment } from 'src/environments/environment.development'
import { RestApiService } from '../rest-api/rest-api.service'

@Injectable({
  providedIn: 'root',
})
export class BookingFormService {
  constructor(private _restApiService: RestApiService) {}

  public getCountries() {
    const url = `${environment.APIEndpoint}booking/countries`

    return this._restApiService.requestGET<any>(url, null, false).then(
      (countries) => {
        return countries
      },
      (error) => {
        return error
      },
    )
  }

  public createBooking(booking: BookingDetails) {
    const url = `${environment.APIEndpoint}booking`
    return this._restApiService
      .requestRawBodyPOST<any>(url, JSON.stringify(booking), null, true)
      .then(
        (data) => {
          return data
        },
        (error) => {
          console.log(error)
          return error
        },
      )
  }
}

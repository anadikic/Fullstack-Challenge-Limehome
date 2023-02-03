import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { BookingFormService } from './services/booking-form/booking-form.service'
import { BookingListService } from './services/booking-list/booking-list.service'
import { RestApiService } from './services/rest-api/rest-api.service'

const MODULE_PROVIDERS = [
  RestApiService,
  BookingFormService,
  BookingListService,
]

@NgModule({})
export class BookingCommonModule {
  static forRoot(): ModuleWithProviders<BookingCommonModule> {
    return {
      ngModule: BookingCommonModule,
      providers: [...MODULE_PROVIDERS],
    }
  }
}

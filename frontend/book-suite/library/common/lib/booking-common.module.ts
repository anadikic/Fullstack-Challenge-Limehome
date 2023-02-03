import { ModuleWithProviders, NgModule } from '@angular/core'
import { BookingListService } from './services/booking-list/booking-list.service'
import { RestApiService } from './services/rest-api/rest-api.service'

const MODULE_PROVIDERS = [RestApiService, BookingListService]

@NgModule({})
export class BookingCommonModule {
  static forRoot(): ModuleWithProviders<BookingCommonModule> {
    return {
      ngModule: BookingCommonModule,
      providers: [...MODULE_PROVIDERS],
    }
  }
}

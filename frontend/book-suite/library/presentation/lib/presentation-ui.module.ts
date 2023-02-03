import { ModuleWithProviders, NgModule } from '@angular/core'
import { BookingFormModule } from './modules/booking-form/booking-form.module'
import { HeaderModule } from './modules/header'
import { ListOfBookingsModule } from './modules/list-of-bookings'

const MODULES = [BookingFormModule, ListOfBookingsModule, HeaderModule]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class PresentationUiModule {
  static forRoot(): ModuleWithProviders<PresentationUiModule> {
    return {
      ngModule: PresentationUiModule,
    }
  }
}

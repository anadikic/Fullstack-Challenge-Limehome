import { ModuleWithProviders, NgModule } from '@angular/core'
import { HeaderModule } from './modules/header'
import { ListOfBookingsModule } from './modules/list-of-bookings'

const MODULES = [HeaderModule, ListOfBookingsModule]

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

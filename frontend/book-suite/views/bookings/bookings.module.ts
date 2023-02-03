import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BookingCommonModule } from 'library/common/lib/booking-common.module'
import { PresentationUiModule } from 'library/presentation/lib/presentation-ui.module'
import { BookingsComponent } from './bookings.component'

const routes: Routes = [{ path: '', component: BookingsComponent }]

@NgModule({
  declarations: [BookingsComponent],
  exports: [BookingsComponent],
  imports: [
    CommonModule,
    BookingCommonModule,
    PresentationUiModule,
    RouterModule.forChild(routes),
  ],
})
export class BookingsModule {}

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ListOfBookingsComponent } from './list-of-bookings.component'

@NgModule({
  declarations: [ListOfBookingsComponent],
  imports: [CommonModule],
  exports: [ListOfBookingsComponent],
})
export class ListOfBookingsModule {}

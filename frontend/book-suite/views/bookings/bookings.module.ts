import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BookingsComponent } from './bookings.component'

const routes: Routes = [{ path: '', component: BookingsComponent }]

@NgModule({
  declarations: [BookingsComponent],
  exports: [BookingsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BookingsModule {}

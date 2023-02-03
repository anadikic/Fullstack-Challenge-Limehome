import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PresentationUiModule } from 'library/presentation/lib/presentation-ui.module'
import { BookingComponent } from './booking.component'

const routes: Routes = [{ path: '', component: BookingComponent }]

@NgModule({
  declarations: [BookingComponent],
  exports: [BookingComponent],
  imports: [CommonModule, PresentationUiModule, RouterModule.forChild(routes)],
})
export class BookingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from 'views/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () =>
      import('../../views/booking/booking.module').then((m) => m.BookingModule),
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('../../views/bookings/bookings.module').then(
        (m) => m.BookingsModule,
      ),
  },
  { path: '', redirectTo: '/bookings', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BookingCommonModule } from 'library/common/lib/booking-common.module'
import { PresentationUiModule } from 'library/presentation/lib/presentation-ui.module'
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDaterangepickerMd.forRoot(),
    BookingCommonModule.forRoot(),
    PresentationUiModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RestApiService } from 'library/common/lib/services/rest-api/rest-api.service'
import { BookingFormComponent } from './booking-form.component'
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material'
import { GroupComponent } from './group/group.component'
import { TextInputComponent } from './inputs/text-input/text-input.component'

@NgModule({
  declarations: [
    BookingFormComponent,
    GroupComponent,
    TextInputComponent,
    GroupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDaterangepickerMd,
  ],
  exports: [BookingFormComponent, TextInputComponent, GroupComponent],
  providers: [RestApiService],
})
export class BookingFormModule {}

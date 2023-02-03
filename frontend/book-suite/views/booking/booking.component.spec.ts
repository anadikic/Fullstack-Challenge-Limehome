import { CommonModule } from '@angular/common'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BookingCommonModule } from 'library/common/lib/booking-common.module'
import { PresentationUiModule } from 'library/presentation/lib/presentation-ui.module'
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material'
import { BookingComponent } from './booking.component'

describe('BookingComponent', () => {
  let component: BookingComponent
  let fixture: ComponentFixture<BookingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingComponent],
      providers: [],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        BookingCommonModule,
        PresentationUiModule,
        NgxDaterangepickerMd.forRoot(),
        RouterTestingModule,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

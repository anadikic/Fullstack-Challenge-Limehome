import { CommonModule } from '@angular/common'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { BookingCommonModule } from 'library/common/lib/booking-common.module'
import { PresentationUiModule } from 'library/presentation/lib/presentation-ui.module'

import { BookingsComponent } from './bookings.component'

describe('BookingsComponent', () => {
  let component: BookingsComponent
  let fixture: ComponentFixture<BookingsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingsComponent],
      providers: [],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        BookingCommonModule,
        PresentationUiModule,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

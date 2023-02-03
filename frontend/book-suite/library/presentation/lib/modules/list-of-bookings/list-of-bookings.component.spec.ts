import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { RestApiService } from 'library/common/lib/services/rest-api/rest-api.service'
import { ListOfBookingsComponent } from './list-of-bookings.component'

describe('ListOfBookingComponent', () => {
  let component: ListOfBookingsComponent
  let fixture: ComponentFixture<ListOfBookingsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        CommonModule,
      ],
      declarations: [ListOfBookingsComponent],
      providers: [HttpClient, RestApiService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBookingsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

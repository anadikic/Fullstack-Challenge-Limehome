import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { RestApiService } from 'library/common/lib/services/rest-api/rest-api.service'
import { BookingFormComponent } from './booking-form.component'
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material'
import { TextInputComponent } from './inputs/text-input/text-input.component'
import { GroupComponent } from './group/group.component'

const localeService: any = {
  get: () => new Promise<any>((resolve, reject) => resolve('Demo Test locale')),
  set: () => new Promise<any>((resolve, reject) => resolve('Demo Test locale')),
}

describe('BookingFormComponent', () => {
  let component: BookingFormComponent
  let fixture: ComponentFixture<BookingFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        CommonModule,
        NgxDaterangepickerMd.forRoot(),
      ],
      declarations: [BookingFormComponent, TextInputComponent, GroupComponent],
      providers: [HttpClient, RestApiService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { inject, TestBed } from '@angular/core/testing'
import { BookingCommonModule } from '../../booking-common.module'

import { RestApiService } from './rest-api.service'

describe('RestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BookingCommonModule.forRoot()],
      providers: [],
    })
  })

  it('should be created', inject(
    [RestApiService],
    (service: RestApiService) => {
      expect(service).toBeTruthy()
    },
  ))
})

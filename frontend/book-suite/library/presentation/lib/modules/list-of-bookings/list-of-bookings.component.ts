import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { BookingListService } from 'library/common/lib/services/booking-list/booking-list.service'
import { BookingDetails } from 'models/bookingDetails'
import { BehaviorSubject, Observable } from 'rxjs'

@Component({
  selector: 'list-of-bookings',
  templateUrl: './list-of-bookings.component.html',
  styleUrls: ['./list-of-bookings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListOfBookingsComponent implements OnInit {
  private _$serverError: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public get serverError$(): Observable<{}> {
    return this._$serverError.asObservable()
  }

  public _$bookings: BehaviorSubject<BookingDetails[]> = new BehaviorSubject<
    BookingDetails[]
  >([])
  public get bookings$(): Observable<BookingDetails[]> {
    return this._$bookings.asObservable()
  }

  constructor(private _bookingListService: BookingListService) {}

  ngOnInit() {
    this.getBookings().then((bookings) => {
      this._$bookings.next(bookings)
    })
  }
  public getBookings(): Promise<BookingDetails[]> {
    return this._bookingListService.getAllBookings().then(
      (bookings) => {
        return bookings
      },
      (error) => {
        console.log(error)
        this._$serverError.next(true)
      },
    )
  }
  ngOnDestroy() {}
}

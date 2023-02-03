import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  OnInit,
} from '@angular/core'
import {
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms'
import { Router } from '@angular/router'
import { BookingFormService } from 'library/common/lib/services/booking-form/booking-form.service'
import { BookingDetails } from 'models/bookingDetails'
import { BehaviorSubject, Observable } from 'rxjs'
import { Booking } from './booking-form-interface'

@Component({
  selector: 'booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingFormComponent implements OnInit {
  bookingForm: FormGroup<Booking> = new FormGroup<Booking>({
    lastName: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(35),
    ]),
    firstName: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(50),
    ]),
    billingAddress: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(50),
    ]),
    phoneNumber: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(50),
    ]),
    postalCode: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(10),
    ]),
    city: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(40),
    ]),
    billingCountry: new FormControl({ value: null, disabled: false }, [
      Validators.required,
      Validators.maxLength(20),
    ]),
    email: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]),
    numberOfGuests: new FormControl(1, [
      Validators.required,
      Validators.min(1),
    ]),
    dates: new FormControl(''),
  })
  loading = false
  submitted = false

  hasFocus: string = ''

  showError: string[] = []
  minDate = new Date()
  selectedCountry: string = ''
  selected: any
  today: Date = new Date()
  tomorrow: Date = new Date()

  private countries: any = null

  private _$showError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  )
  public get showError$(): Observable<{}> {
    return this._$showError.asObservable()
  }

  private _$countries: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  )
  public get countries$(): Observable<any> {
    return this._$countries.asObservable()
  }

  private _$errorMessage: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public get errorMessage$(): Observable<boolean> {
    return this._$errorMessage.asObservable()
  }

  constructor(
    private _bookingService: BookingFormService,
    private route: Router,
  ) {
    this.tomorrow.setDate(this.today.getDate() + 1)
  }

  ngOnInit() {
    this.selected = {
      start: this.today,
      end: this.tomorrow,
    }

    this.getCountries().then((countries) => {
      if (countries && countries.length > 0) {
        this._$countries.next(countries)
        this.countries = countries
      }
      this.selectedCountry = 'null'
    })
  }

  dateRangeValidator() {
    let checkInDate
    let checkOutDate
    if (this.selected.start.$d) {
      checkInDate = this.selected.start.$d.getDate()
      checkOutDate = this.selected.end.$d.getDate()
    } else {
      checkInDate = this.selected.start.getDate()
      checkOutDate = this.selected.end.getDate()
    }

    const todaysDate = new Date()
    if (
      checkInDate < todaysDate.getDate() ||
      checkOutDate < checkInDate ||
      checkInDate === checkOutDate
    ) {
      this.f.dates.setErrors({ incorrect: true })
    }

    return null
  }

  public getCountries(): Promise<any> {
    return this._bookingService.getCountries().then(
      (countries: any) => {
        return countries
      },
      (error) => {
        console.log(error)
        this._$errorMessage.next(true)
        this.showError.push("Can't get available countries from the server.")
        setTimeout(() => {
          const errorMessage = document.querySelector(
            'div.error-message',
          ) as HTMLElement
          if (errorMessage && errorMessage.offsetTop) {
            errorMessage.scrollIntoView({ behavior: 'smooth' })
          }
        }, 800)
      },
    )
  }

  get f() {
    return this.bookingForm.controls
  }

  public hasValue(fieldname: any) {
    const _input = fieldname
    return _input.value ? _input.value.toString().trim !== '' : false
  }

  onSubmit() {
    const currentSelectedCountry = this.countries.filter(
      (s: any) => s.alpha2 === this.f.billingCountry.value,
    )
    this.dateRangeValidator()
    this.submitted = true
    const bookingDetails: BookingDetails = {
      lastName: this.f.lastName.value,
      firstName: this.f.firstName.value,
      billingAddress: this.f.billingAddress.value,
      phoneNumber: this.f.phoneNumber.value,
      postalCode: this.f.postalCode.value,
      city: this.f.city.value,
      billingCountry:
        currentSelectedCountry && currentSelectedCountry[0]
          ? currentSelectedCountry[0].name
          : '',
      countryCode: this.f.billingCountry.value,
      numberOfGuests: this.f.numberOfGuests.value,
      checkInDate: this.selected.start,
      checkOutDate: this.selected.end,
      email: this.f.email.value,
    }

    this.loading = true
    if (this.bookingForm.invalid) {
      this.loading = false
      setTimeout(function () {
        const errorMessage = document.querySelector(
          'div.invalid-feedback',
        ) as HTMLElement

        if (errorMessage && errorMessage.offsetParent) {
          errorMessage.offsetParent.scrollIntoView({ behavior: 'smooth' })
        }
      }, 400)
      return
    } else {
      this._$errorMessage.next(false)
      this._bookingService.createBooking(bookingDetails).then((booking) => {
        if (booking && booking.error) {
          this.showError = []
          this._$errorMessage.next(true)
          if (typeof booking.error.message === 'string') {
            this.showError.push(booking.error.message)
          }

          setTimeout(() => {
            const errorMessage = document.querySelector(
              'div.error-message',
            ) as HTMLElement
            if (errorMessage && errorMessage.offsetTop) {
              errorMessage.scrollIntoView({ behavior: 'smooth' })
            }
          }, 800)
        } else {
          this.route.navigate(['/bookings'])

          window.scrollTo(0, 0)
        }
        this.loading = false
      })
    }
  }

  resetForm() {
    this.f.lastName.setValue('')
    this.f.firstName.setValue('')
    this.f.billingAddress.setValue('')
    this.f.postalCode.setValue('')
    this.f.city.setValue('')
    this.f.billingCountry.setValue('')
    this.f.phoneNumber.setValue('')
    this.f.numberOfGuests.setValue(0)

    this.selected = {
      start: this.today,
      end: this.tomorrow,
    }
  }

  public onTouched: () => void = () => {}

  writeValue(val: any): void {
    val && this.bookingForm.patchValue(val, { emitEvent: false })
  }

  ngOnDestroy() {}
}

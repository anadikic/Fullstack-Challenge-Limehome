import { FormControl, FormGroup } from '@angular/forms'

export interface Booking {
  lastName: FormControl<string | null>
  firstName: FormControl<string | null>
  billingAddress: FormControl<string | null>
  phoneNumber: FormControl<string | null>
  postalCode: FormControl<string | null>
  city: FormControl<string | null>
  billingCountry: FormControl<string | null>
  email: FormControl<string | null>
  numberOfGuests: FormControl<number | null>
  dates: FormControl<string | null>
}

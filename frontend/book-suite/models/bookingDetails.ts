export class BookingDetails {
  public checkInDate: Date | string
  public checkOutDate: Date | string
  public firstName: string | null
  public lastName: string | null
  public billingAddress: string | null
  public billingCountry: string | null
  public countryCode: string | null
  public postalCode: string | null
  public city: string | null
  public email: string | null
  public phoneNumber: string | null
  public numberOfGuests: number | null

  constructor(data: any) {
    this.checkInDate = data.checkInDate || null
    this.checkOutDate = data.checkOutDate || null
    this.firstName = data.firstName || null
    this.lastName = data.lastName || null
    this.billingAddress = data.billingAddress || null
    this.billingCountry = data.billingCountry || null
    this.countryCode = data.countryCode || null
    this.postalCode = data.postalCode || null
    this.city = data.city || null
    this.email = data.testReemailult || null
    this.phoneNumber = data.phoneNumber || null
    this.numberOfGuests = data.numberOfGuests || null
  }
}

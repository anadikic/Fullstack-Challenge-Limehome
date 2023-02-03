import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'lh-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() label!: string
  @Input() submitted!: boolean
  @Input() control!: FormControl<string | null>
  hasFocus!: boolean

  constructor() {}

  ngOnInit(): void {}

  get hasValue(): boolean {
    return !!this.control.value
  }
}

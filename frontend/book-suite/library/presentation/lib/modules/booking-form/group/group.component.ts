import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'lh-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input() label!: string
  @Input() class!: string
  @Input() submitted!: boolean
  @Input() control!: FormControl<string | number | null>
  constructor() {}

  ngOnInit(): void {}

  get hasValue(): boolean {
    return !!this.control.value
  }
}

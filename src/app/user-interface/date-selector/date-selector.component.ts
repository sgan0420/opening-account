import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrl: './date-selector.component.css'
})
export class DateSelectorComponent {

  @Input() label: string;
  @Input() control: FormControl = new FormControl();

}

import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.css',
})
export class NumberInputComponent {
  @Input() label: string;
  @Input() control: AbstractControl;

  getControl() {
    return this.control as FormControl;
  }
}

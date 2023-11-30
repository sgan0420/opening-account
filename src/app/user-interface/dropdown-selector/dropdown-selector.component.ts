import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-selector',
  templateUrl: './dropdown-selector.component.html',
  styleUrl: './dropdown-selector.component.css',
})
export class DropdownSelectorComponent {
  @Input() label: string;
  @Input() control: AbstractControl;
  @Input() options: string[] = [];

  getControl() {
    return this.control as FormControl;
  }
}

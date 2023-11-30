import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-yes-no-selector',
  templateUrl: './yes-no-selector.component.html',
  styleUrl: './yes-no-selector.component.css',
})
export class YesNoSelectorComponent {
  @Input() label: string;
  @Input() control: AbstractControl;
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  onSelectionChange(selectedValue: string): void {
    this.selectionChange.emit(selectedValue);
  }

  getControl() {
    return this.control as FormControl;
  }
}

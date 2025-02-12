import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-character-input',
  templateUrl: './character-input.component.html',
  styleUrl: './character-input.component.css',
})
export class CharacterInputComponent {
  @Input() label: string;
  @Input() control: AbstractControl;
  @Input() hint: string;

  getControl() {
    return this.control as FormControl;
  }
}

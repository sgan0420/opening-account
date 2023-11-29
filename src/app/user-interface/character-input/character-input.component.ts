import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-character-input',
  templateUrl: './character-input.component.html',
  styleUrl: './character-input.component.css'
})
export class CharacterInputComponent {

  @Input() label: string;
  @Input() control: FormControl = new FormControl();
  @Input() hint: string;
  
}

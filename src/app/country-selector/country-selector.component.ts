import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.css'
})
export class CountrySelectorComponent {

  @Input() label: string;
  @Input() control: FormControl;

  countries = ['Malaysia', 'Singapore', 'UK'];

  constructor() { }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter((country) => country.toLowerCase().includes(filterValue));
  }

  displayFn(country: string): string {
    return country;
  }

}




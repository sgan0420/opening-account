import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.css'
})
export class CountrySelectorComponent implements OnInit {

  @Input() label: string;
  @Input() control: FormControl = new FormControl();

  countries: string[] = ['China', 'Malaysia', 'Singapore', 'United Kingdom'];
  filteredCountries: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredCountries = this.control.valueChanges.pipe(
      startWith(''),
      map(country => country ? this._filter(country) : this.countries.slice())
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter((country) => country.toLowerCase().indexOf(filterValue) === 0);
  }
  
  clearInvalidInput() {
    if (!this.countries.includes(this.control.value)) {
      this.control.setValue(null);
    }
  }

}




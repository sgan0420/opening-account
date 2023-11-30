import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountryDataService } from '../../utilities/country-data.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.css',
})
export class CountrySelectorComponent implements OnInit {
  @Input() label: string;
  @Input() control: AbstractControl;

  filteredCountries: Observable<string[]>;

  constructor(private cds: CountryDataService) {}

  ngOnInit(): void {
    this.filteredCountries = this.control.valueChanges.pipe(
      startWith(''),
      map((country) =>
        country ? this._filter(country) : this.cds.getCountries(),
      ),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cds
      .getCountries()
      .filter((country) => country.toLowerCase().indexOf(filterValue) === 0);
  }

  getControl() {
    return this.control as FormControl;
  }
}

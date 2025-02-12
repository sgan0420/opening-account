import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { CountryDataService } from '../../utilities/country-data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css',
})
export class PersonalDetailsComponent implements OnInit {
  @Input() parentForm: FormGroup;
  personalDetailsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cds: CountryDataService,
  ) {}

  ngOnInit(): void {
    this.personalDetailsForm = this.fb.group({
      title: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      middleName: [''],
      gender: ['', Validators.required],
      birthdate: ['', [Validators.required, this.ageValidator(18)]],
      residential: ['', Validators.required],
      state: ['', Validators.required],
      postal: ['', Validators.required],
      country: [
        '',
        [
          Validators.required,
          this.cds.allowedValidator(this.cds.getCountries()),
        ],
      ],
      status: ['', Validators.required],
    });
    this.parentForm.addControl('personalDetailsForm', this.personalDetailsForm);
  }

  ageValidator(
    minAge: number,
  ): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return { required: true };
      }

      const birthdate = new Date(control.value);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthdate.getFullYear();

      if (age < minAge) {
        Swal.fire({
          title: 'Attention',
          text: 'Please note that you have to be at least 18 years old to open an account.',
        }).then(() => {});
        return { ageTooYoung: true, requiredAge: minAge };
      }

      return null;
    };
  }
}

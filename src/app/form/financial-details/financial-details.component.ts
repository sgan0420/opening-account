import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrl: './financial-details.component.css',
})
export class FinancialDetailsComponent {
  @Input() parentForm: FormGroup;
  financialDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.financialDetailsForm = this.fb.group({
      employment: ['', Validators.required],
      employer: ['', Validators.required],
      business: ['', Validators.required],
      otherBusiness: [''],
      salary: ['', Validators.required],
      otherIncome: ['', Validators.required],
      check1: [''],
      check2: [''],
      check3: [''],
      check4: [''],
    });

    this.setOtherBusinessValidation();
    this.setCheckBoxValidation();

    this.parentForm.addControl(
      'financialDetailsForm',
      this.financialDetailsForm,
    );
  }

  setOtherBusinessValidation() {
    const businessControl = this.financialDetailsForm.get('business');
    const otherBusinessControl = this.financialDetailsForm.get('otherBusiness');
    businessControl.valueChanges.subscribe((value) => {
      if (value === 'Others (Please specify)') {
        otherBusinessControl.setValidators([Validators.required]);
      } else {
        otherBusinessControl.clearValidators();
      }
      otherBusinessControl.updateValueAndValidity();
    });
  }

  setCheckBoxValidation() {
    const atLeastOneCheckboxSelected = (
      group: AbstractControl,
    ): { [key: string]: any } | null => {
      const isAtLeastOneSelected = [
        'check1',
        'check2',
        'check3',
        'check4',
      ].some((controlName) => group.get(controlName)?.value);
      return isAtLeastOneSelected ? null : { requiredCheckbox: true };
    };

    const otherIncomeControl = this.financialDetailsForm.get('otherIncome');
    otherIncomeControl.valueChanges.subscribe((value) => {
      if (value && value !== 'None') {
        this.financialDetailsForm.setValidators([atLeastOneCheckboxSelected]);
      } else {
        this.financialDetailsForm.clearValidators();
      }
      this.financialDetailsForm.updateValueAndValidity();
    });
  }

  isOtherIncome() {
    return (
      this.financialDetailsForm.get('otherIncome').value !== 'None' &&
      this.financialDetailsForm.get('otherIncome').value
    );
  }
}

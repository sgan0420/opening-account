import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataStorageService } from '../utilities/data-storage.service';

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrl: './financial-details.component.css',
})
export class FinancialDetailsComponent {
  @Input() parentForm: FormGroup;
  financialDetailsForm: FormGroup;

  constructor(private fb: FormBuilder, private dss: DataStorageService) {}

  ngOnInit(): void {
    this.financialDetailsForm = this.fb.group({
      employment: ['', Validators.required],
      employer: ['', Validators.required],
      business: ['', Validators.required],
      otherbusiness: [''],
      salary: ['', Validators.required],
      otherincome: ['', Validators.required],
      check1: [''],
      check2: [''],
      check3: [''],
      check4: [''],
    });

    this.setOtherBusinessValidation();
    this.setCheckBoxValidation();

    this.dss.patchStoredData(this.financialDetailsForm, 'financialDetailsData');
    this.parentForm.addControl(
      'financialDetailsForm',
      this.financialDetailsForm
    );
  }

  setOtherBusinessValidation() {
    const businessControl = this.financialDetailsForm.get('business');
    const otherBusinessControl = this.financialDetailsForm.get('otherbusiness');
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
      group: AbstractControl
    ): { [key: string]: any } | null => {
      const isAtLeastOneSelected = [
        'check1',
        'check2',
        'check3',
        'check4',
      ].some((controlName) => group.get(controlName)?.value);
      return isAtLeastOneSelected ? null : { requiredCheckbox: true };
    };

    const otherIncomeControl = this.financialDetailsForm.get('otherincome');
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
      this.financialDetailsForm.get('otherincome').value !== 'None' &&
      this.financialDetailsForm.get('otherincome').value
    );
  }
}

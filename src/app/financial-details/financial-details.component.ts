import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DataStorageService } from '../utilities/data-storage.service';

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrl: './financial-details.component.css'
})
export class FinancialDetailsComponent {

  @Input() parentForm: FormGroup;
  financialDetailsForm: FormGroup;

  constructor(private fb: FormBuilder, private dss: DataStorageService) { }

  ngOnInit(): void {
    this.financialDetailsForm = this.fb.group({
      employment: ['', Validators.required],
      employer: ['', Validators.required],
      business: ['', Validators.required],
      otherbusiness: [''],
      salary: ['', Validators.required],
      otherincome: ['', Validators.required],
    });

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

    this.dss.patchStoredData(this.financialDetailsForm, 'financialDetailsData')
    this.parentForm.addControl('financialDetailsForm', this.financialDetailsForm);
  }

}

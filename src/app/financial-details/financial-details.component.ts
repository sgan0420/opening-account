import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    });
    this.dss.patchStoredData(this.financialDetailsForm, 'financialDetailsData')
    this.parentForm.addControl('financialDetailsForm', this.financialDetailsForm);
  }
}

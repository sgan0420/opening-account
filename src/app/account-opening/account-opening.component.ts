import { ChangeDetectorRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataStorageService } from '../utilities/data-storage.service';

@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrl: './account-opening.component.css'
})
export class AccountOpeningComponent {

  parentForm: FormGroup;
  steps = [
    { label: 'Fatca Status', form: 'fatcaStatusForm' },
    { label: 'Personal Details', form: 'personalDetailsForm' },
    { label: 'Financial Details', form: 'financialDetailsForm' },
    { label: 'Reasons To Open', form: 'reasonToOpenForm' },
  ];

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private dss: DataStorageService) { }

  ngOnInit(): void {
    this.parentForm = this.fb.group({});
    this.cdr.detectChanges();
  }

  onSubmit(f: NgForm) {
    if (this.parentForm.valid) {
      console.log('Complete form submitted:', this.parentForm.value);
    } else {
      console.log('Incomplete form saved:', this.parentForm.value);
    }
    this.dss.storeData(this.parentForm);
  }

  isStepCompleted(form) {
    return form ? form.valid : false;
  }

}

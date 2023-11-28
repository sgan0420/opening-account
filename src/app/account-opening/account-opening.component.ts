import { ChangeDetectorRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrl: './account-opening.component.css'
})
export class AccountOpeningComponent {

  parentForm: FormGroup;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.parentForm = this.fb.group({});
    this.cdr.detectChanges();
    console.log(this.parentForm);
  }

  onSubmit(f: NgForm) {
    if (this.parentForm.valid) {
      console.log('Form submitted:', this.parentForm.value);
    } else {
      console.log('Form is invalid. Please fill out the required fields.');
    }
    sessionStorage.setItem('fatcaStatusData', JSON.stringify(this.parentForm.get('fatcaStatusForm').value));
  }

  isStepCompleted(form) {
    return form ? form.valid : false;
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrl: './account-opening.component.css'
})
export class AccountOpeningComponent {

  parentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onSubmit(f: NgForm) {
    console.log(f);
    if (this.parentForm.valid) {
      // Submit the form
      console.log('Form submitted:', this.parentForm.value);
    } else {
      console.log('Form is invalid. Please fill out the required fields.');
    }
  }

  ngOnInit(): void {
    this.parentForm = this.fb.group({});
  }

  isStepCompleted(form) {
    return form ? form.valid : false;
  }
  

}

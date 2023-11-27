import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent implements OnInit {

  @Input() parentForm: FormGroup;
  personalDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetailsForm = this.fb.group({
      mobnum: ['', Validators.required],
    });

    this.parentForm.addControl('personalDetailsForm', this.personalDetailsForm);

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataStorageService } from '../utilities/data-storage.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css'
})
export class PersonalDetailsComponent implements OnInit {

  @Input() parentForm: FormGroup;
  personalDetailsForm: FormGroup;

  constructor(private fb: FormBuilder, private dss: DataStorageService) { }

  ngOnInit(): void {
    this.personalDetailsForm = this.fb.group({
      title: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: [''],
    });
    this.dss.patchStoredData(this.personalDetailsForm, 'personalDetailsData');
    this.parentForm.addControl('personalDetailsForm', this.personalDetailsForm);
  }

}

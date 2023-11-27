import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fatca-status',
  templateUrl: './fatca-status.component.html',
  styleUrl: './fatca-status.component.css'
})
export class FatcaStatusComponent implements OnInit {

  @Input() parentForm: FormGroup;
  fatcaStatusForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fatcaStatusForm = this.fb.group({
      citizenship: ['', Validators.required],
      birth: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      tax: ['', Validators.required],
      taxResidencies: this.fb.array([], Validators.required),
    });
    this.parentForm.addControl('fatcaStatusForm', this.fatcaStatusForm);
    this.addTaxResidencies();
  }

  get taxResidencies() {
    return this.fatcaStatusForm.controls["taxResidencies"] as FormArray;
  }

  addTaxResidencies() {
    const taxResidency = this.fb.group({
      jurisdiction: ['', Validators.required],
      tin: ['', Validators.required]
    });
    this.taxResidencies.push(taxResidency);
  }
  

}

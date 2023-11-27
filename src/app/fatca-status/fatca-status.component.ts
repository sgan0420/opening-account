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
      taxResidencies: this.fb.array([]),
    });
    this.parentForm.addControl('fatcaStatusForm', this.fatcaStatusForm);
  }

  get taxResidencies() {
    return this.fatcaStatusForm.controls['taxResidencies'] as FormArray;
  }

  addTaxResidency() {
    const taxResidency = this.fb.group({
      jurisdiction: ['', Validators.required],
      tin: ['', Validators.required]
    });
    this.taxResidencies.push(taxResidency);
  }

  deleteTaxResidency(index: number) {
    this.taxResidencies.removeAt(index);
  }

  deleteAllTaxResidencies() {
    if (this.fatcaStatusForm.controls['tax'].value === 'No') {
      while (this.taxResidencies.length !== 0) {
        this.taxResidencies.removeAt(0);
      }
    } else {
      this.addTaxResidency();
    }
  }

}

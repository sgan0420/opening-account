import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    
    console.log(sessionStorage.getItem('fatcaStatusData'));
    
    this.fatcaStatusForm = this.fb.group({
      citizenship: ['', Validators.required],
      birth: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      tax: ['', Validators.required],
      taxResidencies: this.fb.array([]),
    });
    
    this.parentForm.addControl('fatcaStatusForm', this.fatcaStatusForm);

    const storedData = JSON.parse(sessionStorage.getItem('fatcaStatusData'));
    this.fatcaStatusForm.patchValue(storedData);
    
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

  func() {
    this.fatcaStatusForm.controls['citizenship'].valueChanges.subscribe((value) => {
      console.log(value);
    })
    this.fatcaStatusForm.controls['birth'].valueChanges.subscribe((value) => {
      console.log(value);
    })
    this.fatcaStatusForm.controls['address'].valueChanges.subscribe((value) => {
      console.log(value);
    })
    this.fatcaStatusForm.controls['telephone'].valueChanges.subscribe((value) => {
      console.log(value);
    })
    this.fatcaStatusForm.controls['tax'].valueChanges.subscribe((value) => {
      console.log(value);
    })
    this.fatcaStatusForm.controls['taxResidencies'].valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  deleteTaxResidency(index: number) {
    this.taxResidencies.removeAt(index);
  }

  deleteAllTaxResidencies(value: string) {
    if (value === 'No') {
      while (this.taxResidencies.length !== 0) {
        this.taxResidencies.removeAt(0);
      }
    } else {
      this.addTaxResidency();
    }
  }

  showAttention(value: string) {
    if (value === 'Yes') {
      Swal.fire({
        title: 'Attention', 
        text: 'Please note that due to restrictions and tax reporting requirements to U.S. persons, we are sorry to inform that we are unable to open accounts for an individual with U.S. citizenship/ U.S. Permanent Resident Status/ U.S. Taxpayer Identification Number (TIN) and/ or U.S. Residential/ Mailing Address. For further clarification, please contact us.',
      });
    }
  }

}

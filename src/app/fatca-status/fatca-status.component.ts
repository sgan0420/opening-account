import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataStorageService } from '../utilities/data-storage.service';

@Component({
  selector: 'app-fatca-status',
  templateUrl: './fatca-status.component.html',
  styleUrl: './fatca-status.component.css'
})
export class FatcaStatusComponent implements OnInit {

  @Input() parentForm: FormGroup;
  fatcaStatusForm: FormGroup;

  constructor(private fb: FormBuilder, private dss: DataStorageService) { }

  ngOnInit(): void {
    this.fatcaStatusForm = this.fb.group({
      citizenship: ['', Validators.required],
      birth: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      tax: ['', Validators.required],
      taxResidencies: this.fb.array([]),
    });
    this.dss.patchStoredData(this.fatcaStatusForm, 'fatcaStatusData');
    const storedTaxResidencies = JSON.parse(sessionStorage.getItem('taxResidenciesData')) as Array<{ jurisdiction: string, tin: string }>;
    if (storedTaxResidencies) {
      storedTaxResidencies.forEach(
        taxResidency => {
          this.addTaxResidency(taxResidency.jurisdiction, taxResidency.tin);
        }
      );
    }
    this.parentForm.addControl('fatcaStatusForm', this.fatcaStatusForm);
  }

  get taxResidencies() {
    return this.fatcaStatusForm.controls['taxResidencies'] as FormArray;
  }

  addTaxResidency(newJurisdiction: string, newTin: string) {
    const taxResidency = this.fb.group({
      jurisdiction: [newJurisdiction, Validators.required],
      tin: [newTin, Validators.required]
    });
    this.taxResidencies.push(taxResidency);
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
      this.addTaxResidency('', '');
    }
    console.log('delete');
  }

  showAttention(selectedValue: string) {
    console.log('alert');

    if (selectedValue === 'Yes') {
      Swal.fire({
        title: 'Attention',
        text: 'Please note that due to restrictions and tax reporting requirements to U.S. persons, we are sorry to inform that we are unable to open accounts for an individual with U.S. citizenship/ U.S. Permanent Resident Status/ U.S. Taxpayer Identification Number (TIN) and/ or U.S. Residential/ Mailing Address. For further clarification, please contact us.',
      });
    }
  }

}

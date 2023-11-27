import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrl: './financial-details.component.css'
})
export class FinancialDetailsComponent {

  @Input() parentForm: FormGroup;
  financialDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.financialDetailsForm = this.fb.group({
      
    });

    this.parentForm.addControl('financialDetailsForm', this.financialDetailsForm);

  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      tin: ['', Validators.required],
    });

    this.parentForm.addControl('fatcaStatusForm', this.fatcaStatusForm);

  }

}

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataStorageService } from '../utilities/data-storage.service';

@Component({
  selector: 'app-reason-to-open',
  templateUrl: './reason-to-open.component.html',
  styleUrl: './reason-to-open.component.css'
})
export class ReasonToOpenComponent {

  @Input() parentForm: FormGroup;
  reasonToOpenForm: FormGroup;

  constructor(private fb: FormBuilder, private dss: DataStorageService) { }

  ngOnInit(): void {
    this.reasonToOpenForm = this.fb.group({
      
    });
    this.dss.patchStoredData(this.reasonToOpenForm, 'reasonToOpenData')
    this.parentForm.addControl('reasonToOpenForm', this.reasonToOpenForm);

  }

}

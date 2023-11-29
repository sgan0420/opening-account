import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class DataStorageService {
  storeData(parentForm: FormGroup) {
    sessionStorage.setItem(
      'fatcaStatusData',
      JSON.stringify(parentForm.get('fatcaStatusForm').value)
    );
    sessionStorage.setItem(
      'personalDetailsData',
      JSON.stringify(parentForm.get('personalDetailsForm').value)
    );
    sessionStorage.setItem(
      'financialDetailsData',
      JSON.stringify(parentForm.get('financialDetailsForm').value)
    );
    sessionStorage.setItem(
      'reasonToOpenData',
      JSON.stringify(parentForm.get('reasonToOpenForm').value)
    );
    sessionStorage.setItem(
      'taxResidenciesData',
      JSON.stringify(
        parentForm.get('fatcaStatusForm').get('taxResidencies').value
      )
    );
  }

  patchStoredData(form: FormGroup, data: string) {
    const storedData = JSON.parse(sessionStorage.getItem(data));
    form.patchValue(storedData);
  }
}

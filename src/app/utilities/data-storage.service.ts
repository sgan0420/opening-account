import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class DataStorageService {
  storeData(parentForm: FormGroup) {
    sessionStorage.setItem(
      'accountOpeningData',
      JSON.stringify(parentForm.value),
    );
    sessionStorage.setItem(
      'taxResidenciesData',
      JSON.stringify(parentForm.get('fatcaStatusForm.taxResidencies').value),
    );
  }

  patchStoredData(form: FormGroup, data: string) {
    const storedData = JSON.parse(sessionStorage.getItem(data));
    form.patchValue(storedData);
  }
}

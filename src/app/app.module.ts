import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { FatcaStatusComponent } from './fatca-status/fatca-status.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FinancialDetailsComponent } from './financial-details/financial-details.component';
import { ReasonToOpenComponent } from './reason-to-open/reason-to-open.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountOpeningComponent } from './account-opening/account-opening.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './utilities/dropdown.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DataStorageService } from './utilities/data-storage.service';
import { YesNoSelectorComponent } from './yes-no-selector/yes-no-selector.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FatcaStatusComponent,
    PersonalDetailsComponent,
    FinancialDetailsComponent,
    ReasonToOpenComponent,
    AccountOpeningComponent,
    DropdownDirective,
    HeaderComponent,
    HomeComponent,
    YesNoSelectorComponent,
    CountrySelectorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NzInputModule,
    NzFormModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

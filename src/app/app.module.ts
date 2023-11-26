import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { FatcaStatusComponent } from './fatca-status/fatca-status.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FinancialDetailsComponent } from './financial-details/financial-details.component';
import { ReasonToOpenComponent } from './reason-to-open/reason-to-open.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountOpeningComponent } from './account-opening/account-opening.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './utilities/dropdown.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

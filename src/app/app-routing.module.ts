import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOpeningComponent } from './form/account-opening/account-opening.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personal-account-opening', component: AccountOpeningComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

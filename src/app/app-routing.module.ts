import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component'


const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

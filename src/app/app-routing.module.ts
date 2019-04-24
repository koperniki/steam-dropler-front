import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component'
import { AddAccountComponent } from './add-account/add-account.component';
import { NodeComponent } from './node/node.component';


const routes: Routes = [
  { path: '', redirectTo: '/account', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: 'add-account', component: AddAccountComponent },
  { path: 'node', component: NodeComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

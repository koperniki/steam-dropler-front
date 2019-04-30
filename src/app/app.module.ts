import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule, MatPaginatorModule, MatToolbarModule, 
MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, 
MatOptionModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';

import { RequesterService } from './requester.service';
import { AccountApiService } from './account-api.service';
import { ToasterService } from './toaster.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAccountComponent } from './add-account/add-account.component';
import { NodeComponent } from './node/node.component';
import { AccountInfoComponent } from './account-info/account-info.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AddAccountComponent,
    NodeComponent,
    AccountInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [RequesterService, AccountApiService, ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

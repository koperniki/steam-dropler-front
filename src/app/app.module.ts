import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';

import { RequesterService } from './requester.service';
import { AccountApiService } from './account-api.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RequesterService, AccountApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

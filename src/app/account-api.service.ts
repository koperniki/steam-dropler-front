import { Injectable } from '@angular/core';
import { RequesterService } from './requester.service';
import { Observable } from 'rxjs';
import {  Account } from './models/account';


@Injectable({
  providedIn: 'root',
})
export class AccountApiService {

  readonly handler: string = "account";

  constructor(private requester: RequesterService) { }

  public GetAccountList(): Observable<Account[]> {
    return this.requester.Request(this.handler, "list", null);
  }
}

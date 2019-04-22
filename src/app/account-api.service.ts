import { Injectable } from '@angular/core';
import { RequesterService } from './requester.service';
import { Observable } from 'rxjs';
import {  IAccount } from './models/account';


@Injectable({
  providedIn: 'root',
})
export class AccountApiService {

  readonly handler: string = "account";

  constructor(private requester: RequesterService) { }

  public GetAccountList(): Observable<IAccount[]> {
    return this.requester.Request(this.handler, "list", null);
  }
}

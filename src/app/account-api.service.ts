import { Injectable } from '@angular/core';
import { RequesterService } from './requester.service';
import { Observable } from 'rxjs';
import {  IAccount, SteamAccount } from './models/account';
import {  MailConfig, IMailConfig } from './models/mail-config';



@Injectable({
  providedIn: 'root',
})
export class AccountApiService {

  readonly handler: string = "account";

  constructor(private requester: RequesterService) { }

  public GetAccountList(): Observable<IAccount[]> {
    return this.requester.Request(this.handler, "list", null);
  }

  public AddAccount(account: SteamAccount): Observable<IAccount> {
    return this.requester.Request(this.handler, "add", account);
  }

  public AddMailConfig(config: MailConfig): Observable<IMailConfig> {
    return this.requester.Request(this.handler, "add_mail_config", config);
  }
}

import { Injectable } from '@angular/core';
import { RequesterService } from './requester.service';
import { Observable } from 'rxjs';
import {  IAccount, SteamAccount } from './models/account';
import {  MailConfig, IMailConfig } from './models/mail-config';
import { IMafileConfig, MaFileConfig } from './models/mafile-config';



@Injectable({
  providedIn: 'root',
})
export class AccountApiService {
  
  
 

  readonly handler: string = "account";

  constructor(private requester: RequesterService) { }



  public GetAccountList(): Observable<IAccount[]> {
    return this.requester.Request(this.handler, "list", {});
  }

  public AddAccount(account: SteamAccount): Observable<IAccount> {
    return this.requester.Request(this.handler, "add", account);
  }

  public AddMailConfig(config: MailConfig): Observable<IMailConfig> {
    return this.requester.Request(this.handler, "add_mail_config", config);
  }

  public AddMaFileConfig(config: MaFileConfig): Observable<IMafileConfig> {
    return this.requester.Request(this.handler, "add_mafile_config", config);
  }

  public ReadAccount(id: string): Observable<IAccount> {
    return this.requester.Request(this.handler, "read", {id});
  }

  public InitialLogin(id: string): Observable<number> {
    return this.requester.Request(this.handler, "initial_login", {id});
  }

  public UpdateFamilyInfo(id: string): Observable<boolean> {
    return this.requester.Request(this.handler, "update_family_info", {id});
  }

  public GetParentGame(id: string): Observable<boolean> {
    return this.requester.Request(this.handler, "get_parent_game", {id});
  }

  public RedeemKey(key: string, id: string): Observable<boolean> {
    return this.requester.Request(this.handler, "redeem_key", { Key: key, Id: id});
  }

  public UpdateItems(id: string) {
    return this.requester.Request(this.handler, "update_items", {id});
  }

}

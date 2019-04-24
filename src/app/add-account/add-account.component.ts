import { Component, OnInit } from '@angular/core';
import {FormControl,  Validators} from '@angular/forms';
import { IAccount, SteamAccount } from '../models/account'
import { MailConfig } from '../models/mail-config'
import { AccountApiService } from '../account-api.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  account: IAccount = new SteamAccount();
  hide = true;
  user = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  sgSource = new FormControl('', [Validators.required]);

  mailUser = new FormControl('', [Validators.required, Validators.email]);
  mailPass = new FormControl('', [Validators.required]);
  mailServer = new FormControl('', [Validators.required]);
  mailPort = new FormControl('', [Validators.required]);

  constructor(private accountApi: AccountApiService) { 
   
  }

  ngOnInit() {
    this.mailUser.setValue('mail@kopern.tk');
    this.mailPass.setValue('org100h');
    this.mailServer.setValue('imap.yandex.ru');
    this.mailPort.setValue(993);
  }

  public saveAccount(): void {
    let account = new SteamAccount();
    account.userName = this.user.value;
    account.userPass = this.pass.value;
    account.email = this.email.value;
    switch(this.sgSource.value) {
      case 'manual':
        account.steamGuardSource = 0;
      break;
      case 'email':
        account.steamGuardSource = 1;
      break;
      case 'mafile':
        account.steamGuardSource = 2;
      break;
    }
    this.accountApi.AddAccount(account).subscribe((t) => {
      if (account.steamGuardSource === 1) {
        let config = new MailConfig();
        config.Mail = this.mailUser.value;
        config.MailPort = this.mailPort.value;
        config.MailServer = this.mailServer.value;
        config.Pass = this.mailPass.value;
        config.SteamAccountId = t.id;
        this.accountApi.AddMailConfig(config).subscribe((t)=>{

        });
      }
    });

  }

  getErrorUser() {
    return this.user.hasError('required') ? 'You must enter a value'  :  '';
  }
  getErrorPass() {
    return this.pass.hasError('required') ? 'You must enter a value'  :  '';
  }

  getErrorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';         
  }
  getErrorSg() {
    return this.pass.hasError('required') ? 'You must select a value'  :  '';
  }

  getErrorMailServer() {
    return this.mailServer.hasError('required') ? 'You must enter a value'  :  '';     
  }

  getErrorMailUser() {
    return this.mailUser.hasError('required') ? 'You must enter a value' :
        this.mailUser.hasError('email') ? 'Not a valid email' :
            ''; 
    
  }

  getErrorMailPass() {
    return this.mailPass.hasError('required') ? 'You must enter a value'  :  '';
  }

  getErrorMailPort() {
    return this.mailPort.hasError('required') ? 'You must enter a value'  :  '';
  }

}

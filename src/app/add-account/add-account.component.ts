import { Component, OnInit } from '@angular/core';
import {FormControl,  Validators} from '@angular/forms';
import { IAccount, SteamAccount } from '../models/account'

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
  constructor() { 
   
  }

  ngOnInit() {
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

}

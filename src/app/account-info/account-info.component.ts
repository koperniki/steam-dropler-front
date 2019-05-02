import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AccountApiService } from '../account-api.service';
import { IAccount } from '../models/account';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private accountApi: AccountApiService, private location: Location) { }

  accountId: string;
  account: IAccount;

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.accountApi.ReadAccount(this.accountId).subscribe(t=>{
      this.account = t;
    });

  }

  public initAccount():void {
    this.accountApi.InitialLogin(this.accountId).subscribe(t=>
      {
        if (t === 1){
          this.accountApi.ReadAccount(this.accountId).subscribe(acc=>{
            this.account = acc;
          });
        }
      }     
    );
  }


}

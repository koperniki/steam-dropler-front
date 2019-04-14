import { Component, OnInit } from '@angular/core';
import { AccountApiService } from '../account-api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountApi: AccountApiService) { }

  ngOnInit() {
    this.accountApi.GetAccountList().subscribe(t=>{
      console.log(t);
    });
  }

}

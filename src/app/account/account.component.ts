import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { AccountApiService } from '../account-api.service';
import {Account} from '../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'status', 'edit'];
  dataSource: MatTableDataSource<Account>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private accountApi: AccountApiService) { }

  ngOnInit() {
    this.accountApi.GetAccountList().subscribe(t=>{
      this.dataSource = new MatTableDataSource<Account>(t);
      this.dataSource.paginator = this.paginator;
      console.log(t);
    });
  }

}

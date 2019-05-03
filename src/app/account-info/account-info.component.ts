import { Component, OnInit, Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AccountApiService } from '../account-api.service';
import { IAccount } from '../models/account';
import { MatTableDataSource } from '@angular/material';
import { GameOwnedInfo } from '../models/game-owned-info';
import { DropConfigService } from '../drop-config.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { IDropConfig } from '../models/drop-config';
import { SetDropConfig } from '../models/set-drop-config';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private accountApi: AccountApiService, 
    private configApi: DropConfigService, 
    public dialog: MatDialog,
    private location: Location) { }

  displayedColumns: string[] = ['game', 'paymentMethod', 'dropCount', 'dropConfigName'];
  gameInfo: MatTableDataSource<GameOwnedInfo>;

  accountId: string;
  account: IAccount;

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.accountApi.ReadAccount(this.accountId).subscribe(t=>{
      this.account = t;
      this.gameInfo = new MatTableDataSource<GameOwnedInfo>(t.gamesInfo);
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


  public openDialog(gameId: number): void {
    this.configApi.GetConfigByApp(gameId).subscribe(t=>{
      const dialogRef = this.dialog.open(DialogSetDropConfig, {
        width: '250px',
        data: t
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result){
          let addconf = new SetDropConfig();
          addconf.dropConfigId = result;
          addconf.gameId = gameId;
          addconf.steamAccountId = this.accountId;
          this.configApi.SetDropConfig(addconf).subscribe(res=>{
            this.accountApi.ReadAccount(this.accountId).subscribe(t=>{
              this.account = t;
              this.gameInfo = new MatTableDataSource<GameOwnedInfo>(t.gamesInfo);
            });
          });
        }
        
      });
    });

  }


}

@Component({
  selector: 'dialog-set-drop-config',
  templateUrl: 'dialog-set-drop-config.html',
})
export class DialogSetDropConfig {

  constructor(
    public dialogRef: MatDialogRef<DialogSetDropConfig>, @Inject(MAT_DIALOG_DATA) public data: IDropConfig[]) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { IDropConfig, DropConfig } from '../models/drop-config';
import { MatTableDataSource } from '@angular/material';
import { DropConfigService } from '../drop-config.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SetDropConfig } from '../models/set-drop-config';
import { ToasterService } from '../toaster.service';


@Component({
  selector: 'app-drop-config',
  templateUrl: './drop-config.component.html',
  styleUrls: ['./drop-config.component.css']
})
export class DropConfigComponent implements OnInit {

  displayedColumns: string[] = ['game', 'configName', 'dropDef', 'dropInterval','dropWidndow','dropPerWindow','setAll'];
  dropCofigs: MatTableDataSource<IDropConfig>;

  constructor(private dropConfigService: DropConfigService, private toast: ToasterService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dropConfigService.GetConfigList().subscribe(t=>{
      this.dropCofigs = new MatTableDataSource<IDropConfig>(t);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDropConfig, {
      width: '250px',
      data: new DropConfig()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.dropConfigService.AddConfig(result).subscribe(t=>{
          this.dropConfigService.GetConfigList().subscribe(t=>{
            this.dropCofigs = new MatTableDataSource<IDropConfig>(t);
          })
        });
      }
      
    });
  }

  public setAll(gameId: number, configId: string): void {
    let dropConf = new SetDropConfig();
    dropConf.gameId = gameId;
    dropConf.dropConfigId = configId;
    this.dropConfigService.SetDropConfigAll(dropConf).subscribe(t=>{
      this.toast.showInfo('Config setted')
    });
  }


}

@Component({
  selector: 'dialog-drop-config',
  templateUrl: 'dialog-drop-config.html',
})
export class DialogDropConfig {

  constructor(
    public dialogRef: MatDialogRef<DialogDropConfig>, @Inject(MAT_DIALOG_DATA) public data: DropConfig) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

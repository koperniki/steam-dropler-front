import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private snackBar: MatSnackBar) {
  }

  showError(msg: string) {
      this.snackBar.open(msg, null, {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['red-snackbar']
         
      });
  }

  showInfo(msg: string) {
    this.snackBar.open(msg, null, {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['blue-snackbar']
       
    });
}
}

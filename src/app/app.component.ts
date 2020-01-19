import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(userProfileDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'user-profile-dialog',
  templateUrl: 'user-profile-dialog.html',
})
export class userProfileDialog {}

import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
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
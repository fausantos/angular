import { MeetingFormComponent } from './../meeting-form/meeting-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

   addMetting() {
    const dialogRef = this.dialog.open(MeetingFormComponent, {width: '500px'} );

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    });
  }

}

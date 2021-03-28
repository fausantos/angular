import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent implements OnInit {

  public meetingForm!: FormGroup;

  constructor(

    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MeetingFormComponent>
    //@Inject(MAT_DIALOG_DATA) public data: string
    ) { }

  ngOnInit(): void {

    this.meetingForm = this.fb.group({
      id : [null],
      meetingForm : ['', Validators.required],
      meetingSubject : ['', Validators.required],
      meetingResponsible : ['', Validators.required],
      meetingDate : ['', Validators.required],
      meetingTime : ['', Validators.required],
    })


  }
  cancel():void{
    this.dialogRef.close();
  }

  save():void{
    console.log('--> '+this.meetingForm);
  }


}

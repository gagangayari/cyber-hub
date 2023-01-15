import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  email  = new FormControl();
  message  = new FormControl();

  constructor(
    private dialogRef : MatDialogRef<ContactComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.dialogRef.close()

  }

}

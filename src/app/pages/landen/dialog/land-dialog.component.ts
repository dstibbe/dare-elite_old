import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Land, LandSettings} from '../models/land.model';

@Component({
  selector: 'app-land-dialog',
  templateUrl: './land-dialog.component.html',
  styleUrls: ['./land-dialog.component.scss']
})
export class LandDialogComponent implements OnInit {

  public form:FormGroup;
  landen: Land[] | null;

  constructor(public dialogRef: MatDialogRef<LandDialogComponent>, @Inject(MAT_DIALOG_DATA) public land: Land, public fb: FormBuilder) {

  }

  ngOnInit() {

    this.form = this.fb.group({
      id: null,
      code: [null],
      naam: [null],
      landSettings: this.fb.group({
        isActive: [true],
        isDeleted: [false],
        registrationDate: [null],
        joinedDate: [null],
      }), 
    });
    
    if(this.land){
      this.form.setValue(this.land);
      console.log('setValue from dialog', this.land);
    } 
    else{
      console.log('new land from dialog');
      this.land = new Land();
      this.land.landSettings = new LandSettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Land, LandSettings} from '../models/land.model';

@Component({
  selector: 'dare-land-dialog',
  templateUrl: './land-dialog.component.html',
  styleUrls: ['./land-dialog.component.scss']
})
export class LandDialogComponent implements OnInit {

  public form: FormGroup;
  landen: Land[] | null;

  constructor(public dialogRef: MatDialogRef<LandDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Land, public fb: FormBuilder) {

  }

  ngOnInit() {
    console.log('Oninit dialog', this.data);
    this.form = this.fb.group({
      id: null,
      key: null,
      code: [null],
      naam: [null],
      landSettings: this.fb.group({
        isActive: [true],
        isDeleted: [false],
        registrationDate: [null],
        joinedDate: [null],
      }),
    });

    if (this.data) {
      this.form.patchValue(this.data);
      console.log('setValue from dialog', this.data);
    } else {
      console.log('new land from dialog');
      this.data = new Land();
      this.data.landSettings = new LandSettings();
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}

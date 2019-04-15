import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User, UserRoles, UserSettings } from 'src/app/authentication/models/user.model';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  public form:FormGroup;
  public passwordHide:boolean = true;

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>, @Inject(MAT_DIALOG_DATA) public user: User, public fb: FormBuilder) {

    this.form = this.fb.group({
      firstname: [null, Validators.compose([Validators.required])],
      surname: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }

  ngOnInit() {
    if(this.user){
      this.form.setValue(this.user);
    } 
    else{
      this.user = new User();
       this.user.userRoles = new UserRoles();
       this.user.userSettings = new UserSettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

}

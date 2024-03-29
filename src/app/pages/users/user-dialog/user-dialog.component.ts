import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder} from '@angular/forms';
import { User, Userprofile, Usersettings } from 'src/app/authentication/models/user.model';

@Component({
  selector: 'dare-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  public form:FormGroup;
  public passwordHide:boolean = true;

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>, @Inject(MAT_DIALOG_DATA) public user: User, public fb: FormBuilder) {
    this.form = this.fb.group({
      id: null,    
      profile: this.fb.group({
        firstname: null,
        lastname: null
      }),
      settings: this.fb.group({
        isDeleted: null,
        registrationDate: null
      }),
      userroles: this.fb.group({
        crm: null,
        inkoop: null,
        verkoop: null,
        artikelen: null,
        financiel: null,
        werknemers: null,
        uren: null
      })
    });
  }

  ngOnInit() {
    if(this.user){
      this.form.setValue(this.user);
    } 
    else{
      this.user = new User();
      this.user.profile = new Userprofile();
      this.user.settings = new Usersettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

}

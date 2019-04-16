import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { emailValidator, matchingPasswords } from 'src/app/theme/utils/app-validators';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'dare-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public auth: AuthService, private router: Router, public fb: FormBuilder) { 

    this.settings = this.appSettings.settings; 

    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
      'profile': this.fb.group({
        'firstname': null,
        'lastname': null
      }),
      'settings': this.fb.group({
        'isDeleted': null,
        'registrationDate': new Date()
      }),
      'userroles': this.fb.group({
        'crm': null,
        'inkoop': null,
        'verkoop': null,
        'artikelen': null,
        'financiel': null,
        'werknemers': null,
        'uren': null
      })
    },{validator: matchingPasswords('password', 'confirmPassword')});

  }

  ngOnInit() {


  }

  onSubmit(form) {
    if (this.form.valid) {
    this.auth.emailSignUp(form.email, form.password).then(() => this.afterSignIn())
    }
  }

  private afterSignIn() {
    return this.router.navigate(['/login']);
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'dare-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  public settings: Settings;

  constructor(public appSettings: AppSettings, public auth: AuthService, private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
  }


  onLogin(loginForm: { email: string; password: string; }) {
    if (this.loginForm.valid) {
    this.auth.emailLogin(loginForm.email, loginForm.password).then(() => this.afterSignIn())
    }
  }


  private afterSignIn() {
    return this.router.navigate(['/']);
  }

  ngAfterViewInit(){
   // this.settings.loadingSpinner = false; 
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dare-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  onRegister(registerForm: { email: string; password: string; }) {
    this.auth.emailSignUp(registerForm.email, registerForm.password).then(() => this.afterSignIn())
  }

  private afterSignIn() {
    return this.router.navigate(['/login']);
  }
}

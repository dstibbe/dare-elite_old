import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  
  isLoggedIn = false;

  constructor(private afAuth: AngularFireAuth, private service: AuthService) {

    afAuth.authState.subscribe(auth => {
      if(auth) {
        console.log('logged in');
        this.isLoggedIn = true;
      } else {
        console.log('not logged in');
        this.isLoggedIn = false;
      }
    });

   }

  ngOnInit() {



  }

  isLoggedStatus() {
    return this.isLoggedIn;
}

logout() {
  this.isLoggedIn = false;
  this.service.signOut()
}

}

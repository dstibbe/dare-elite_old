import { Component, OnInit} from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'dare-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  settings: Settings;
  isLoggedIn = false;


  constructor(public appSettings: AppSettings, afAuth: AngularFireAuth){
      this.settings = this.appSettings.settings;

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

  onLogout() {

  }

  isLoggedStatus() {
    return this.isLoggedIn;
}
  
}
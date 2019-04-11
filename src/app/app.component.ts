import { Component, ViewChild, OnInit} from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { Observable } from 'rxjs';
import { User } from './authentication/models/user.model';

@Component({
  selector: 'dare-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public settings: Settings;

  constructor(public appSettings: AppSettings){
      this.settings = this.appSettings.settings;
  } 

  ngOnInit() {
  }

  onLogout() {

  }
  
}
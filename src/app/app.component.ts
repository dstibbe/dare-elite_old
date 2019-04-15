import { Component, OnInit} from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';

@Component({
  selector: 'dare-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  settings: Settings;

  constructor(public appSettings: AppSettings){
      this.settings = this.appSettings.settings;

  } 

  ngOnInit() {
  }
  
}
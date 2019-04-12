import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'dare-tabs-vertical',
  templateUrl: './tabs-vertical.html',
  styleUrls: ['./tabs-vertical.scss']
})
export class TabsVerticalComponent implements OnInit {

  public settings: Settings;
  constructor(public appSettings:AppSettings){
      this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
  }

}

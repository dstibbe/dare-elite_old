import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'dare-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements AfterViewInit {

  public settings: Settings;

  constructor(public appSettings:AppSettings, public router:Router) {

    this.settings = this.appSettings.settings; 

  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false;  
  } 

}
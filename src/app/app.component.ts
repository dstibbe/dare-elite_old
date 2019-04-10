import { Component, ViewChild, OnInit} from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { Observable } from 'rxjs';
import { User } from './authentication/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { getUser, getIsLoggedIn, getIsLoading, getIsAdmin } from './authentication/store/auth.selectors';
import * as fromAuth from './authentication/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  public settings: Settings;

  constructor(public appSettings:AppSettings, private store: Store<AppState>){
      this.settings = this.appSettings.settings;
  } 

  ngOnInit() {
    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isAdmin$ = this.store.select(getIsAdmin);
  }

  onLogout(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested( { user }));
  }
  
}
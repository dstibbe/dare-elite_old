import { Component, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { MenuService } from '../theme/components/menu/menu.service';
import { Observable } from 'rxjs';
import { User } from '../authentication/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { getUser, getIsLoggedIn, getIsLoading, getIsAdmin } from '../authentication/store/auth.selectors';
import * as fromAuth from '../authentication/store/auth.actions';

@Component({
  selector: 'dare-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [ MenuService ]
})
export class PagesComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') sidenav: any;
  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  public settings: Settings;
  public menus = ['vertical', 'horizontal'];
  public menuOption: string;
  public menuTypes = ['default', 'compact', 'mini'];
  public menuTypeOption: string;
  public isStickyMenu = false;
  public lastScrollTop = 0;
  public showBackToTop = false;
  public toggleSearchBar = false;
  private defaultMenu: string; // declared for return default menu when window resized
  public scrolledContent: any;


  constructor(public appSettings: AppSettings, public router: Router, private menuService: MenuService, private store: Store<AppState>) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }
    this.user$ = this.store.select(getUser);
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isLoading$ = this.store.select(getIsLoading);
    this.isAdmin$ = this.store.select(getIsAdmin);
    this.menuOption = this.settings.menu;
    this.menuTypeOption = this.settings.menuType;
    this.defaultMenu = this.settings.menu;
  }

  onLogout(user: User) {
    this.store.dispatch(new fromAuth.LogoutRequested( { user }));
  }

  ngAfterViewInit() {
    setTimeout(() => { this.settings.loadingSpinner = false; }, 300);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!this.settings.sidenavIsPinned) {
          this.sidenav.close();
        }
        if (window.innerWidth <= 768) {
          this.sidenav.close();
        }
      }
    });
    if (this.settings.menu === 'vertical') {
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    }
  }

  public chooseMenu() {
    this.settings.menu = this.menuOption;
    this.defaultMenu = this.menuOption;
    this.router.navigate(['/']);
  }

  public chooseMenuType() {
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme) {
    this.settings.theme = theme;
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public onPsScrollY(event) {
    this.scrolledContent = event.target;
    (this.scrolledContent.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
    if (this.settings.menu === 'horizontal') {
      if (this.settings.fixedHeader) {
        const currentScrollTop = (this.scrolledContent.scrollTop > 56) ? this.scrolledContent.scrollTop : 0;
        (currentScrollTop > this.lastScrollTop) ? this.isStickyMenu = true : this.isStickyMenu = false;
        this.lastScrollTop = currentScrollTop;
      } else {
        (this.scrolledContent.scrollTop > 56) ? this.isStickyMenu = true : this.isStickyMenu = false;
      }
    }
  }

  public scrollToTop() {
    const scrollDuration = 200;
    const scrollStep = -this.scrolledContent.scrollTop / (scrollDuration / 20);
    const scrollInterval = setInterval(() => {
      if (this.scrolledContent.scrollTop !== 0) {
         this.scrolledContent.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
    if (window.innerWidth <= 768) {
      this.scrolledContent.scrollTop = 0;
    }
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 768) {
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical';
    } else {
      (this.defaultMenu === 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  public closeSubMenus() {
    const menu = document.querySelector('.sidenav-menu-outer');
    if (menu) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < menu.children[0].children.length; i++) {
        const child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains('expanded')) {
              child.children[0].classList.remove('expanded');
              child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}

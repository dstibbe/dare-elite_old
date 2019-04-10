import { Component, OnInit, OnDestroy } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { Land } from '../models/land.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { AngularFireAuth } from '@angular/fire/auth';
import { getIsLoading, getLanden } from '../store/landen.selectors';
import * as fromLanden from './../store/landen.actions';
import { map } from 'rxjs/operators';
import { LandDialogComponent } from '../dialog/land-dialog.component';

@Component({
  selector: 'dare-landen',
  templateUrl: './landen.component.html',
  styleUrls: ['./landen.component.scss']
})
export class LandenComponent implements OnInit, OnDestroy {

  isLoading$: Observable<boolean>;
  landen: Land[] | null;

  landenSub: Subscription;
  lastLandIndex: number;

  settings: Settings;
  searchText: string;

  constructor(public appSettings: AppSettings, public dialog: MatDialog, private store: Store<AppState>, private afAuth: AngularFireAuth) {

    this.settings = this.appSettings.settings;

   }

  ngOnInit() {

    this.isLoading$ = this.store.select(getIsLoading);

    this.landenSub = this.store.select(getLanden).pipe(
      map( (landen: Land[]) => {
        if (this.user && !landen) {
          this.store.dispatch(new fromLanden.LandenQuery());
        }
        return landen;
      })
    )
    .subscribe( (landen: Land[]) => {
      if (landen && landen.length !== 0) {
        const index: number = Number(landen[landen.length - 1].id);
        this.lastLandIndex = index;
      } else {
        this.lastLandIndex = 0;
      }

      this.landen = landen;
      console.log('after init landen', this.landen);
      console.log('after init landenSub', this.landenSub);
    });


  }

  get user() {
    return this.afAuth.auth.currentUser;
  }

  ngOnDestroy() {
    if (this.landenSub) {
      this.landenSub.unsubscribe();
    }
  }

  public openLandDialog(land) {
    const dialogRef = this.dialog.open(LandDialogComponent, {
        data: land
    });

    // tslint:disable-next-line:no-shadowed-variable
    dialogRef.afterClosed().subscribe(land => {
        if (land) {
          console.log('land na dialog', land);
          (land.key) ? this.store.dispatch(new fromLanden.LandenEdited({ land })) : this.store.dispatch(new fromLanden.LandenAdded({ land }));
        }
    });
}

}

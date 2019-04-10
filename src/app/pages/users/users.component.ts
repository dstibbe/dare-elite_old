import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { User } from './user.model';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [  ]  
})
export class UsersComponent implements OnInit {

    
    public users: User[];
    public searchText: string;
    public page:any;
    public settings: Settings;
    
    constructor(public appSettings:AppSettings, public dialog: MatDialog){
        this.settings = this.appSettings.settings; 
    }

    ngOnInit() {      
    }

    public openUserDialog(user){
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: user
        });

        dialogRef.afterClosed().subscribe(user => {
            if(user){
              //  (user.id) ? this.updateUser(user) : this.addUser(user);
            }
        });
    }

}
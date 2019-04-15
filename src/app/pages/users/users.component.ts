import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { User } from 'src/app/authentication/models/user.model';

@Component({
  selector: 'dare-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UsersService ]  
})
export class UsersComponent implements OnInit {
    users: User[];
    page:any;
    settings: Settings;

    constructor(public appSettings:AppSettings, public dialog: MatDialog, public usersService:UsersService){
        this.settings = this.appSettings.settings; 
    }

    ngOnInit() {
        this.loadUsers();
   
    }

    loadUsers() {
        this.usersService.getUsers().subscribe(users => {
            this.users = users
            console.log(this.users);
        });    
    }

    
    public onPageChanged(event){
        this.page = event;
        if(this.settings.fixedHeader){      
            document.getElementById('main-content').scrollTop = 0;
        }
        else{
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }

    public openUserDialog(user){
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: user
        });

        dialogRef.afterClosed().subscribe(user => {
            if(user){
             //   (user.id) ? this.updateUser(user) : this.addUser(user);
            }
        });
    }

}
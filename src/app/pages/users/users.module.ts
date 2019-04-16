import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { UsersComponent } from './users.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

export const routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    UserDialogComponent
  ],
  entryComponents:[
    UserDialogComponent
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandenComponent } from './components/landen.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandenRoutingModule } from './landen-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule, MatSortModule } from '@angular/material';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LandenRoutingModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
  ],
  declarations: [LandenComponent],
  exports: [LandenComponent]
})
export class LandenModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatieComponent } from './components/relatie.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RelatiesRoutingModule } from './relaties-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule, MatSortModule } from '@angular/material';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RelatiesRoutingModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
  ],
  declarations: [RelatieComponent],
  exports: [RelatieComponent]
})
export class RelatiesModule { }

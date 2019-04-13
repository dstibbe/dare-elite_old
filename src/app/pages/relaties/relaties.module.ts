import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatieComponent } from './components/relatie.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RelatiesRoutingModule } from './relaties-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule, MatSortModule, MatNativeDateModule } from '@angular/material';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { TabsVerticalComponent } from 'src/app/theme/components/tabs-vertical/tabs-vertical';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyFormFlexLayout } from 'src/app/theme/formly/formly-flex';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent } from './components/google-maps.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule,
    RelatiesRoutingModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
  ],
  declarations: [RelatieComponent, TabsVerticalComponent, FormlyFormFlexLayout, GoogleMapsComponent],
  exports: [RelatieComponent, TabsVerticalComponent]
})
export class RelatiesModule { }

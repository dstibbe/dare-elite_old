import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandenComponent } from './components/landen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromLanden from './store/landen.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LandenRoutingModule } from './landen-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandenEffects } from './store/landen.effects';
import { LandDialogComponent } from './dialog/land-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LandenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('landen', fromLanden.landenReducer),
    EffectsModule.forFeature([LandenEffects])
  ],
  declarations: [LandenComponent, LandDialogComponent],
  exports: [LandenComponent],
  entryComponents: [LandDialogComponent]
})
export class LandenModule { }

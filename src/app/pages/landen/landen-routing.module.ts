import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandenComponent } from './components/landen.component';

const routes: Routes = [
  { path: '', component: LandenComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LandenRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatieComponent } from './components/relatie.component';

const routes: Routes = [
  { path: '', component: RelatieComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RelatiesRoutingModule {}

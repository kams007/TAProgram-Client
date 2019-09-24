import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculationAddComponent } from './calculation-add/calculation-add.component';
import { CalculationReadComponent } from './calculation-read/calculation-read.component';
const routes: Routes = [
  {
    path: 'calculation/create',
    component: CalculationAddComponent
  },
  {
    path: 'calculation/results',
    component: CalculationReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOpinionPage } from './create-opinion.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOpinionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateOpinionPageRoutingModule {}

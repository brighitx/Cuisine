import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowRecipePage } from './show-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: ShowRecipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRecipePageRoutingModule {}

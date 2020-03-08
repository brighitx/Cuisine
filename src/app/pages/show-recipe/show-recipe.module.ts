import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowRecipePageRoutingModule } from './show-recipe-routing.module';

import { ShowRecipePage } from './show-recipe.page';
import { YoutubePipe } from '../../pipes/youtube.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowRecipePageRoutingModule
  ],
  declarations: [ShowRecipePage, YoutubePipe]
})
export class ShowRecipePageModule {}

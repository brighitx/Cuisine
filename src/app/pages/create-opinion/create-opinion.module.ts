import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateOpinionPageRoutingModule } from './create-opinion-routing.module';

import { CreateOpinionPage } from './create-opinion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOpinionPageRoutingModule
  ],
  declarations: [CreateOpinionPage]
})
export class CreateOpinionPageModule {}

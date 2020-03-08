import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }


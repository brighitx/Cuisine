import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  slideTexto = [
    '¡Hacemos que cocinar cada día sea una diversión!',
    'Recetas caseras y sencillas con preparación paso a paso',
    'Deliciosas recetas para todos los gustos'];

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}

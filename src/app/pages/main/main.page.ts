import { Component, OnInit } from '@angular/core';
import { IDatabase } from 'src/app/interfaces/database-i';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public searchTerm: string = "";
  public items: any;
  public veganoption = false;
  constructor(public dataBase: IDatabase, private router: Router, private menuCtrl: MenuController) {
    this.items = this.getData();
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  filterItems(searchTerm) {
    return this.getData().filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  filterItemsV() {
    return this.getData().filter(item => {
      return item.vegan.valueOf() === true;
    });
  }

  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm);
  }

  filterItemsVegan() {
    if (!this.veganoption) {
      this.veganoption = true;
      this.items = this.filterItemsV();
    } else {
      this.veganoption = false;
      this.items = this.getData();
    }
  }

  showRecipe(id) {
    this.router.navigate(['/show-recipe', id]);
  }
  getData() {
    return this.dataBase.getAllRecipes();
  }
}

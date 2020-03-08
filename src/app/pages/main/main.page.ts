import { Component, OnInit } from '@angular/core';
import { IDatabase } from 'src/app/interfaces/database-i';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public searchTerm: string = "";
  public items: any;
  constructor(public dataBase: IDatabase, private router: Router) {
    this.items = this.getData();
  }

  ngOnInit() {
  }

  filterItems(searchTerm) {
    return this.getData().filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm);
  }

  showRecipe(id) {
    this.router.navigate(['/show-recipe', id]);
  }
  getData() {
    return this.dataBase.getAllRecipes();
  }
}

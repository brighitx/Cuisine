import { Component, OnInit } from '@angular/core';
import { IDatabase } from 'src/app/interfaces/database-i';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public dataBase: IDatabase, private router: Router) { }

  ngOnInit() {
  }

  showRecipe(id) {
    this.router.navigate(['/show-recipe', id]);
  }
  getData() {
    return this.dataBase.getAllRecipes();
  }
}

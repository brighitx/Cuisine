import { IDatabase } from 'src/app/interfaces/database-i';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.page.html',
  styleUrls: ['./show-recipe.page.scss'],
})
export class ShowRecipePage implements OnInit {
  id: string;
  ingredients = [];
  directions = [];
  constructor(public dataBase: IDatabase, private route: ActivatedRoute, private youtube: YoutubeVideoPlayer) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  getData() {
    return this.dataBase.getRecipe(this.id);
  }
  watch(watch) {
    this.youtube.openVideo(watch);
  }
  getIngredients() {
    this.ingredients = this.getData().ingredients.split(',');
    return this.ingredients;
  }
  getDirections() {
    this.directions = this.getData().directions.split('-');
    return this.directions;
  }

  ngOnInit() {
  }

}

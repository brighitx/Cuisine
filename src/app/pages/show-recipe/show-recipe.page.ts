import { IDatabase } from 'src/app/interfaces/database-i';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File, FileEntry } from "@ionic-native/file/ngx";

const MEDIA_FOLDER_NAME = 'my_media';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.page.html',
  styleUrls: ['./show-recipe.page.scss'],
})
export class ShowRecipePage implements OnInit {
  id: string;
  ingredients = [];
  directions = [];
  //files = [];
  images: any[];

  constructor(
    public dataBase: IDatabase,
    private route: ActivatedRoute,
    private youtube: YoutubeVideoPlayer,
    private file: File) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  getData() {
    return this.dataBase.getRecipe(this.id);
  }
  getOpinionsRecipe() {
    return this.dataBase.getOpinions(this.id);
  }

  watch(watch) {
    this.youtube.openVideo(watch);
  }
  getIngredients() {
    this.ingredients = this.getData().ingredients.split('/');
    return this.ingredients;
  }
  getDirections() {
    this.directions = this.getData().directions.split('/');
    return this.directions;
  }

  ngOnInit() {
  }

}

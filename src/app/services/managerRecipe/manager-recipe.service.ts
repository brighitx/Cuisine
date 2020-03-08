import { Recipeable } from './../../core/model/interfaces/recipeable';
import { Recipe } from './../../core/model/recipe';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerRecipeService {

  private recipes: Observable<Recipeable[]>;
  private recipesColection: AngularFirestoreCollection<Recipeable>;
  private myRecipes: Recipe[];

  constructor(private afs: AngularFirestore) {
    this.recipesColection = this.afs.collection<Recipeable>('recipes');
    this.recipes = this.recipesColection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
    this.recipes.subscribe(
      (res: any) => this.myRecipes = res,
      (err: any) => console.log('It is a error unexpected from firebase suscribe'));
  }

  getAllRecipes(): Array<Recipe> {
    const allRecipe = Array<Recipe>();
    for (const recipe of this.myRecipes) {
      allRecipe.push(recipe);
    }
    return allRecipe;
  }
}

import { ManagerRecipeService } from './../managerRecipe/manager-recipe.service';
import { ManagerUserService } from '../managerUser/manager-user.service';

import { Injectable } from '@angular/core';
import { User } from '../../core/model/user';
import { IDatabase } from '../../interfaces/database-i';
import { Recipe } from 'src/app/core/model/recipe';

@Injectable({
  providedIn: 'root'
})

export class AdapterDatabaseService implements IDatabase {

  constructor(private managerUser: ManagerUserService, private managerRecipe: ManagerRecipeService) {
  }
  private getIdUserActive(): string {
    return this.managerUser.getIdUserActive();
  }
  public signUp(email: string, password: string): Promise<any> {
    return this.managerUser.signUp(email, password);
  }
  public signIn(email: string, password: string): Promise<any> {
    return this.managerUser.signIn(email, password);
  }
  public takeUser(uid: string): User {
    return this.managerUser.takeUser(uid);
  }
  public updateUser(nameUser: string) {
    this.managerUser.updateUser(nameUser);
  }
  public isLogin(): boolean {
    return this.managerUser.isLogin();
  }
  public signOut(): void {
    this.managerUser.signOut();
  }
  public deleteUser(): void {
    this.managerUser.delete();
  }
  public updatePersonalUser(nameUser: string, email: string) {
    this.managerUser.updatePersonalUser(nameUser, email);
  }
  public updatePasswordUser(password: string) {
    this.managerUser.updatePasswordUser(password);
  }
  public takeCurrentUser(): User {
    return this.managerUser.takeUser(this.managerUser.getIdUserActive());
  }
  public getAllRecipes(): Array<Recipe> {
    return this.managerRecipe.getAllRecipes();
  }
}

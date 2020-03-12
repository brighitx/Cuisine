import { Opinion } from './../core/model/opinion';
import { Recipe } from './../core/model/recipe';
import { UserBuilder } from './../core/model/builders/userBuilder';
import { User } from './../core/model/user';
import { IDatabase } from 'src/app/interfaces/database-i';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDatabaseService implements IDatabase {

  private login = false;
  private _userActive: User;
  private _users: Array<User>;
  private _recipes: Array<Recipe>;
  private userBuilder: UserBuilder = new UserBuilder();

  constructor() { }

  signUp(email: string, password: string): Promise<any> {
    return new Promise((resolver, rejected) => {
      const user = this.userBuilder.restart().email(email).password(password).build();
      this._users.push(user);
      if (user != null) {
        resolver(user);
      }
      rejected('muerte');
    });
  }

  signIn(email: string, password: string): Promise<any> {
    return new Promise((resolver, rejected) => {
      let encontrado = false;
      this._users.forEach(user => {
        if (user.email === email && user.password === password) {
          encontrado = true;
          this._userActive = user;
        }
      });
      if (encontrado) {
        this.login = true;
        resolver(this._userActive);
      } else {
        rejected('');
      }
    });
  }

  takeUser(uid: string) {
    let userR: User;
    for (const user of this._users) {
      if (user.id === uid) {
        userR = user;
      }
    }
    return userR;
  }

  takeCurrentUser(): import("../core/model/user").User {
    throw new Error("Method not implemented.");
  }
  updateUser(nameUser: string) {
    this.userActive.name = nameUser;
  }
  updatePersonalUser(nameUser: string, email: string) {
    this.userActive.name = nameUser;
    this.userActive.email = email;
  }
  updatePasswordUser(password: string) {
    this.userActive.password = password;
  }
  isLogin(): boolean {
    return this.login;
  }

  public get userActive(): User {
    return this._userActive;
  }
  public get users(): Array<User> {
    return this._users;
  }
  public get $userBuilder(): UserBuilder {
    return this.userBuilder;
  }
  public set userActive(value) {
    this.userActive = value;
  }

  signOut(): void {
    this.userActive = null;
    this.login = false;
  }

  deleteUser(): void {
    delete this.users[this.userActive.id];
    this.userActive = null;
    console.log('Usuario eliminado');
  }

  getAllRecipes(): Array<Recipe> {
    return this._recipes;
  }
  getRecipe(id: string): Recipe {
    let myRecipe: Recipe;
    for (const recipe of this._recipes) {
      if (recipe.id === id) {
        myRecipe = recipe;
      }
    }
    return myRecipe;
  }
  getOpinions(rid: string): Array<Opinion> {
    throw new Error("Method not implemented.");
  }
  createOpinion(rid: string, nameuser: string, image: string, opinionuser: string, mark: string): void {
    throw new Error("Method not implemented.");
  }
}

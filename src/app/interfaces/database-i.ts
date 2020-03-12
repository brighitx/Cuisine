import { Recipe } from './../core/model/recipe';
import { User } from '../core/model/user';
import { Opinion } from '../core/model/opinion';

export abstract class IDatabase {
    abstract signUp(name: string, email: string, password: string): Promise<any>;
    abstract signIn(email: string, password: string): Promise<any>;
    abstract takeUser(uid: string): User;
    abstract takeCurrentUser(): User;
    abstract updateUser(nameUser: string);
    abstract updatePersonalUser(nameUser: string, email: string);
    abstract updatePasswordUser(password: string);
    abstract isLogin(): boolean;
    abstract signOut(): void;
    abstract deleteUser(): void;
    abstract getAllRecipes(): Array<Recipe>;
    abstract getRecipe(id: string): Recipe;
    abstract getOpinions(rid: string): Array<Opinion>;
    abstract createOpinion(rid: string, nameuser: string, image: string, opinionuser: string, mark: string): void;
}

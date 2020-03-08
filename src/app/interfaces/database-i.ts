import { Recipe } from './../core/model/recipe';
import { User } from '../core/model/user';

export abstract class IDatabase {
    abstract signUp(email: string, password: string): Promise<any>;
    abstract signIn(email: string, password: string): Promise<any>;
    abstract takeUser(uid: string): User;
    abstract takeCurrentUser(): User;
    abstract updateUser(nameUser: string, tittleUser?: string, addressUser?: string);
    abstract updatePersonalUser(nameUser: string, email: string);
    abstract updatePasswordUser(password: string);
    abstract isLogin(): boolean;
    abstract signOut(): void;
    abstract deleteUser(): void;
    abstract getAllRecipes(): Array<Recipe>;
}

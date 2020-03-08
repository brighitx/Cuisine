import { Recipe } from './../recipe';
export class RecipeBuilder {

    // tslint:disable-next-line:variable-name
    private _name: string;
    // tslint:disable-next-line:variable-name
    private _image: string;
    // tslint:disable-next-line:variable-name
    private _ingredients: string;
    // tslint:disable-next-line:variable-name
    private _directions: string;
    // tslint:disable-next-line:variable-name
    private _vegan: boolean;
    // tslint:disable-next-line:variable-name
    private _video: string;

    constructor() {

    }

    public restart(): RecipeBuilder {
        this._name = '';
        this._image = '';
        this._ingredients = '';
        this._directions = '';
        this._vegan = false;
        this._video = '';
        return this;
    }

    name(name: string): RecipeBuilder {
        this._name = name;
        return this;
    }

    image(image: string): RecipeBuilder {
        this._image = image;
        return this;
    }

    ingredients(ingredients: string): RecipeBuilder {
        this._ingredients = ingredients;
        return this;
    }

    directions(directions: string): RecipeBuilder {
        this._directions = directions;
        return this;
    }

    vegan(vegan: boolean): RecipeBuilder {
        this._vegan = vegan;
        return this;
    }

    video(video: string): RecipeBuilder {
        this._video = video;
        return this;
    }

    private generateDID(): string {
        let d = new Date().getTime();
        // tslint:disable-next-line:only-arrow-functions
        const did = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            // tslint:disable-next-line:no-bitwise & triple-equal
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return did;
    }
}
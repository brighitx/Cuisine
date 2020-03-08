export class Recipe {

    // tslint:disable-next-line:variable-name
    private _id: string;
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

    constructor(id: string, name: string, image: string, ingredients: string, directions: string, vegan: boolean, video: string) {
        this._id = id;
        this._name = name;
        this._image = image;
        this._ingredients = ingredients;
        this._directions = directions;
        this._vegan = vegan;
        this._video = video;
    }

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public get image(): string {
        return this._image;
    }
    public get ingredients(): string {
        return this._ingredients;
    }
    public get directions(): string {
        return this._directions;
    }
    public get vegan(): boolean {
        return this._vegan;
    }
    public get video(): string {
        return this._video;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    public set id(value: string) {
        this._id = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set name(value: string) {
        this._name = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set image(value: string) {
        this._image = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set ingredients(value: string) {
        this._ingredients = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set directions(value: string) {
        this._directions = value;
    }
    // tslint:disable-next-line: adjacent-overload-signatures
    public set vegan(value: boolean) {
        this._vegan = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set video(value: string) {
        this._video = value;
    }

}

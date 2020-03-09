export class Opinion {

    // tslint:disable-next-line:variable-name
    private _id: string;
    // tslint:disable-next-line:variable-name
    private _rid: string;
    // tslint:disable-next-line:variable-name
    private _nameuser: string;
    // tslint:disable-next-line:variable-name
    private _image: string;
    // tslint:disable-next-line:variable-name
    private _opinion: string;
    // tslint:disable-next-line:variable-name
    private _mark: string;

    constructor(id: string, rid: string, nameuser: string, image: string, opinion: string, mark: string) {
        this._id = id;
        this._rid = rid;
        this._nameuser = nameuser;
        this._image = image;
        this._opinion = opinion;
        this._mark = mark;
    }

    public get id(): string {
        return this._id;
    }
    public get rid(): string {
        return this._rid;
    }
    public get nameuser(): string {
        return this._nameuser;
    }
    public get image(): string {
        return this._image;
    }
    public get opinion(): string {
        return this._opinion;
    }
    public get mark(): string {
        return this._mark;
    }

    // tslint:disable-next-line:adjacent-overload-signatures
    public set id(value: string) {
        this._id = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set rid(value: string) {
        this._rid = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set nameuser(value: string) {
        this._nameuser = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set image(value: string) {
        this._image = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set opinion(value: string) {
        this._opinion = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set mark(value: string) {
        this._mark = value;
    }

}

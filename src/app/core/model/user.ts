export class User {

    // tslint:disable-next-line:variable-name
    private _id: string;
    // tslint:disable-next-line:variable-name
    private _name: string;
    // tslint:disable-next-line:variable-name
    private _password: string;
    // tslint:disable-next-line:variable-name
    private _email: string;

    constructor(id: string, name: string, password: string, email: string) {
        this._id = id;
        this._name = name;
        this._password = password;
        this._email = email;
    }

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }
    public get password(): string {
        return this._password;
    }

    public get email(): string {
        return this._email;
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
    public set password(value: string) {
        this._password = value;
    }
    // tslint:disable-next-line:adjacent-overload-signatures
    public set email(value: string) {
        this._email = value;
    }

}

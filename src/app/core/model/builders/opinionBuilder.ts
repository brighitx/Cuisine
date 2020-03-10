import { Opinion } from './../opinion';
export class OpinionBuilder {

    // tslint:disable-next-line:variable-name
    private _image: string;
    // tslint:disable-next-line:variable-name
    private _opinion: string;
    // tslint:disable-next-line:variable-name
    private _mark: string;

    constructor() {

    }

    public restart(): OpinionBuilder {
        this._image = '';
        this._opinion = '';
        this._mark = '';
        return this;
    }

    public build(userName: string, recipeId): Opinion {
        return new Opinion(this.generateDID(), recipeId, userName, this._image, this._opinion, this._mark);
    }


    image(image: string): OpinionBuilder {
        this._image = image;
        return this;
    }
    opinion(opinion: string): OpinionBuilder {
        this._opinion = opinion;
        return this;
    }
    mark(mark: string): OpinionBuilder {
        this._mark = mark;
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
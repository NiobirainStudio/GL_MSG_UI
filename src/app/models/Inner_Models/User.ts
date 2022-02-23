export class User {
    id: number;
    name: string;
    description: string;

    constructor(ID: number, NAME: string, DESC: string){
        this.id = ID;
        this.name = NAME;
        this.description = DESC;
    }
}
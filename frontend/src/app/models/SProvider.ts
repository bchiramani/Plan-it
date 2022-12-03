import { User } from "./User";

export class SProvider extends User{
    name : string ;
    category: string ="";
    description: string=""
    constructor(id: number, email: string, password: string, image : string , name : string , category: string , description: string) {
        super(id, email, password,image);
        this.name = name;
        this.category = category;
        this.description = description;
    }
}
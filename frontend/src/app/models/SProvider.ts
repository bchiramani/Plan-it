import { User } from "./User";

export class SProvider extends User{
    id: number;
    name : string ;
    category: string ="";
    description: string=""
    image: string;
    constructor(id: number, email: string, password: string, image : string , name : string , category: string , description: string) {
        super(email, password);
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.image = image;
    }
}
import { User } from "./User";

export class Post{

    id: number;
    user: User;
    description: string ;
    image: string ;
    date : string ;

    constructor(user: User,  description: string,  image : string,    date : string) {
       
        this.user = user;
        this.description = description;
        this.image = image;
        this.date = date;
    }
}
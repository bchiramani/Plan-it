
export class Post{
    id: number;
    sproviderId:number;
    description: string=""
    image: string="";
    constructor(id: number, sproviderId: number,description: string, image : string) {
        this.id = id;
        this.sproviderId = sproviderId;
        this.description = description;
        this.image = image;
    }
}

export class Post{

    id: number;
    userId: number;
    description: string ;
    image: string ;
    serviceType: string ;
    date : string ;

    constructor( id: number ,  userId: number,  description: string,  image : string,  serviceType: string,  date : string) {
        this.id = id;
        this.userId = userId;
        this.description = description;
        this.image = image;
        this.serviceType = serviceType;
        this.date = date;
    }
}
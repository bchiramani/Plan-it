export class User {
    id = 0;
    email = "";
    password = "";
    image=""
    constructor(id: number, email: string, password: string,image: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.image= image;
    }
}
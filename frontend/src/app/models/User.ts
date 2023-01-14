export class User {
    id: number;
    email: string;
    password: string;
    companyName : string ;
    serviceType: string ;
    description: string;
    logo: string ;
    phoneNumber : string ;
    constructor(email: string, password: string, id: number = null,  logo : string = "" , companyName : string = "", serviceType: string = "", description: string = "", phoneNumber : string = "") {
        
        this.id = id;
        this.email = email;
        this.password = password;
        this.companyName = companyName;
        this.serviceType = serviceType;
        this.description = description;
        this.logo = logo;
        this.phoneNumber = phoneNumber;
    }
}
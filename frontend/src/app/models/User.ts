import { ServiceType } from "./ServiceTypes";

export class User {
    id: number;
    email: string;
    password: string;
    companyName : string ;
    serviceType: ServiceType ;
    description: string;
    logo: string ;
    phoneNumber : string ;
    role:string;
    constructor(email: string, password: string,companyName : string = "",serviceType: ServiceType=null,  phoneNumber : string = "", description: string = "", logo : string = "",role:string="" ) {
        //this.id = id;
        this.email = email;
        this.password = password;
        this.companyName = companyName;
        this.serviceType = serviceType;
        this.description = description;
        this.logo = logo;
        this.phoneNumber = phoneNumber;
        this.role = role;
    }
}
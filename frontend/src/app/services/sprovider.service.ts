import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class SproviderService {
  private _subject = new BehaviorSubject<User>(null);
  readonly subject$ = this._subject.asObservable();
  sproviders :Array<User> = [
    {id:0,email:"amani@gmail.com",password:"amani0", logo:"../assets/img/team-1.jpg",companyName:"Amani0",serviceType:"Photographer",description:"I am a photographer", phoneNumber:"12345678"}, 
    {id:1,email:"amani1@gmail.com",password:"amani1", logo:"../assets/img/team-1.jpg",companyName:"Amani1",serviceType:"Musicien",description:"I am a photographer", phoneNumber:"12345678"}, 
    {id:2,email:"amani2@gmail.com",password:"amani2", logo:"../assets/img/team-1.jpg",companyName:"Amani2",serviceType:"Photographer",description:"I am a photographer", phoneNumber:"12345678"}, 
    {id:3,email:"amani3@gmail.com",password:"amani3", logo:"../assets/img/team-1.jpg",companyName:"Amani3",serviceType:"Musicien",description:"I am a photographer", phoneNumber:"12345678"}, 
    {id:4,email:"fatma@gmail.com",password:"fatma0", logo:"../assets/img/team-2.jpg",companyName:"Fatma0",serviceType:"Decorator",description:"I am a decorator", phoneNumber:"12345678"},
    {id:5,email:"fatma@gmail.com",password:"fatma1", logo:"../assets/img/team-2.jpg",companyName:"Fatma1",serviceType:"Decorator",description:"I am a decorator", phoneNumber:"12345678"},
    {id:6,email:"fatma@gmail.com",password:"fatma2", logo:"../assets/img/team-2.jpg",companyName:"Fatma2",serviceType:"Photographer",description:"I am a decorator", phoneNumber:"12345678"},
    {id:7,email:"fatma@gmail.com",password:"fatma3", logo:"../assets/img/team-2.jpg",companyName:"Fatma3",serviceType:"Musicien",description:"I am a decorator", phoneNumber:"12345678"},
    {id:8,email:"arbia@gmail.com",password:"arbia0", logo:"../assets/img/team-3.jpg",companyName:"Arbia0",serviceType:"Chef",description:"I am a chef", phoneNumber:"12345678"},
    {id:9,email:"fatma@gmail.com",password:"fatma2", logo:"../assets/img/team-2.jpg",companyName:"Fatma2",serviceType:"Chef",description:"I am a decorator", phoneNumber:"12345678"},
    {id:10,email:"fatma@gmail.com",password:"fatma3", logo:"../assets/img/team-2.jpg",companyName:"Fatma3",serviceType:"Chef",description:"I am a decorator", phoneNumber:"12345678"},
    {id:11,email:"arbia@gmail.com",password:"arbia0", logo:"../assets/img/team-3.jpg",companyName:"Arbia0",serviceType:"Chef",description:"I am a chef", phoneNumber:"12345678"},
  ];

  constructor(private router: Router) { }

  getAll(){
    return this.sproviders
  }

  getByCategory(category: String){
    let res : Array<User>  =[];
    for (let sprovider of this.sproviders){
      if (sprovider.serviceType == category){
        res.push(sprovider)
      }
    }
    return res
  }

  getCategories(){
    //TODO : a implementer correctement
    return ["Chef","Decorator","Musicien","Potographer"]
  }

  getById(id: number){
    let sprovider : User
    sprovider = this.sproviders.find(sprovider => sprovider.id == id)
    if (sprovider){
      return sprovider
    }
    else{
      this.router.navigate(['**']);
    }
  }
}

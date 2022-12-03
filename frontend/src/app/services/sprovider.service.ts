import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SProvider } from '../models/SProvider';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SproviderService {
  private _subject = new BehaviorSubject<SProvider>(null);
  readonly subject$ = this._subject.asObservable();
  sproviders :Array<SProvider> = [
    {id:0,email:"amani@gmail.com",password:"amani",image:"../assets/img/team-1.jpg",name:"Amani",category:"Photographer",description:"I am a photographer"}, 
    {id:1,email:"amani@gmail.com",password:"amani",image:"../assets/img/team-1.jpg",name:"Amani",category:"Photographer",description:"I am a photographer"}, 
    {id:2,email:"amani@gmail.com",password:"amani",image:"../assets/img/team-1.jpg",name:"Amani",category:"Photographer",description:"I am a photographer"}, 
    {id:3,email:"amani@gmail.com",password:"amani",image:"../assets/img/team-1.jpg",name:"Amani",category:"Photographer",description:"I am a photographer"}, 
    {id:4,email:"fatma@gmail.com",password:"fatma",image:"../assets/img/team-2.jpg",name:"Fatma",category:"Decorator",description:"I am a decorator"},
    {id:5,email:"fatma@gmail.com",password:"fatma",image:"../assets/img/team-2.jpg",name:"Fatma",category:"Decorator",description:"I am a decorator"},
    {id:6,email:"fatma@gmail.com",password:"fatma",image:"../assets/img/team-2.jpg",name:"Fatma",category:"Decorator",description:"I am a decorator"},
    {id:7,email:"fatma@gmail.com",password:"fatma",image:"../assets/img/team-2.jpg",name:"Fatma",category:"Decorator",description:"I am a decorator"},
    {id:8,email:"arbia@gmail.com",password:"arbia",image:"../assets/img/team-3.jpg",name:"Arbia",category:"Chef",description:"I am a chef"},
    {id:9,email:"arbia@gmail.com",password:"arbia",image:"../assets/img/team-3.jpg",name:"Arbia",category:"Chef",description:"I am a chef"},
    {id:10,email:"arbia@gmail.com",password:"arbia",image:"../assets/img/team-3.jpg",name:"Arbia",category:"Chef",description:"I am a chef"},
    {id:11,email:"edem@gmail.com",password:"edem",image:"../assets/img/team-4.jpg",name:"Edem",category:"Musicien",description:"I am a musicien"},
    {id:12,email:"edem@gmail.com",password:"edem",image:"../assets/img/team-4.jpg",name:"Edem",category:"Musicien",description:"I am a musicien"},
    {id:13,email:"edem@gmail.com",password:"edem",image:"../assets/img/team-4.jpg",name:"Edem",category:"Musicien",description:"I am a musicien"}
  ];

  constructor(private router: Router) { }

  getAll(){
    return this.sproviders
  }

  getByCategory(category: String){
    let res : Array<SProvider>  =[];
    for (let sprovider of this.sproviders){
      if (sprovider.category == category){
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
    let sprovider:SProvider
    sprovider = this.sproviders.find(sprovider =>sprovider.id == id)
    if (sprovider){
      return sprovider
    }
    else{
      this.router.navigate(['**']);
    }
  }
}

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
    {id:0,email:"amani@gmail.com",password:"amani0",image:"../assets/img/team-1.jpg",name:"Amani0",category:"Photographer",description:"I am a photographer"}, 
    {id:1,email:"amani@gmail.com",password:"amani1",image:"../assets/img/team-1.jpg",name:"Amani1",category:"Photographer",description:"I am a photographer"}, 
    {id:2,email:"amani@gmail.com",password:"amani2",image:"../assets/img/team-1.jpg",name:"Amani2",category:"Photographer",description:"I am a photographer"}, 
    {id:3,email:"amani@gmail.com",password:"amani3",image:"../assets/img/team-1.jpg",name:"Amani3",category:"Photographer",description:"I am a photographer"}, 
    {id:4,email:"fatma@gmail.com",password:"fatma0",image:"../assets/img/team-2.jpg",name:"Fatma0",category:"Decorator",description:"I am a decorator"},
    {id:5,email:"fatma@gmail.com",password:"fatma1",image:"../assets/img/team-2.jpg",name:"Fatma1",category:"Decorator",description:"I am a decorator"},
    {id:6,email:"fatma@gmail.com",password:"fatma2",image:"../assets/img/team-2.jpg",name:"Fatma2",category:"Decorator",description:"I am a decorator"},
    {id:7,email:"fatma@gmail.com",password:"fatma3",image:"../assets/img/team-2.jpg",name:"Fatma3",category:"Decorator",description:"I am a decorator"},
    {id:8,email:"arbia@gmail.com",password:"arbia0",image:"../assets/img/team-3.jpg",name:"Arbia0",category:"Chef",description:"I am a chef"},
    {id:9,email:"arbia@gmail.com",password:"arbia1",image:"../assets/img/team-3.jpg",name:"Arbia1",category:"Chef",description:"I am a chef"},
    {id:10,email:"arbia@gmail.com",password:"arbia2",image:"../assets/img/team-3.jpg",name:"Arbia2",category:"Chef",description:"I am a chef"},
    {id:11,email:"edem@gmail.com",password:"edem0",image:"../assets/img/team-4.jpg",name:"Edem0",category:"Musicien",description:"I am a musicien"},
    {id:12,email:"edem@gmail.com",password:"edem1",image:"../assets/img/team-4.jpg",name:"Edem1",category:"Musicien",description:"I am a musicien"},
    {id:13,email:"edem@gmail.com",password:"edem2",image:"../assets/img/team-4.jpg",name:"Edem2",category:"Musicien",description:"I am a musicien"}
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

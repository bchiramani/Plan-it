import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _subject = new BehaviorSubject<Post>(null);
  readonly subject$ = this._subject.asObservable();
  private readonly endpoint = 'post';
  posts :Array<Post> = [
    // {id:0, userId:3, description:"Post number 0", image:"../assets/img/team-1.jpg",  date : "01/02/2000"}, 
    // {id:1, userId:3, description:"Post number 1", image:"../assets/img/team-1.jpg",  date : "01/02/2000"},
    // {id:2,userId:3,description:"Post number 2", image:"../assets/img/team-1.jpg" ,  date : "01/02/2000"},
    // {id:3,userId:2,description:"Post number 3",image:"../assets/img/team-1.jpg", date : "01/02/2000"},
    // {id:4,userId:10,description:"Post number 4",image:"../assets/img/team-1.jpg", date : "01/02/2000"},

  ];

  constructor(private http: HttpClient) { }

  addPost(user:any, description:string, image:string) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`
    let post=new Post( user, description, image, currentDate)
    console.log("post at service is ",post)
    return this.http.post(`${environment.apiUrl}/${this.endpoint}/addpost`, post);
  }

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.endpoint}/getall`);

  }
  getPostsBySProvider(userId:Number){
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.endpoint}/${userId}`);
  }
  deletePost(postId:number){
    return this.http.delete(`${environment.apiUrl}/${this.endpoint}/deletepost/${postId}`);
  }
}

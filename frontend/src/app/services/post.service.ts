import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _subject = new BehaviorSubject<Post>(null);
  readonly subject$ = this._subject.asObservable();
  private readonly endpoint = 'post';
  posts :Array<Post> = [
    {id:0, userId:3, description:"Post number 0", image:"../assets/img/team-1.jpg", serviceType : "serviceType", date : "01/02/2000"}, 
    {id:1, userId:3, description:"Post number 1", image:"../assets/img/team-1.jpg", serviceType : "serviceType", date : "01/02/2000"},
    {id:2,userId:3,description:"Post number 2", image:"../assets/img/team-1.jpg" , serviceType : "serviceType", date : "01/02/2000"},
    {id:3,userId:2,description:"Post number 3",image:"../assets/img/team-1.jpg", serviceType : "serviceType", date : "01/02/2000"},
    {id:4,userId:10,description:"Post number 4",image:"../assets/img/team-1.jpg", serviceType : "serviceType", date : "01/02/2000"},

  ];

  constructor(private http: HttpClient) { }

  addPost(userId:number, description:string, image:string): Observable<Post> {
    return this.http.post<Post>(`${environment.apiUrl}/${this.endpoint}/addPost`, new Post(this.posts.length+1, userId, description, image, "serviceType", "date"));
  }

  getAllPosts() {
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.endpoint}`,);
  }
  getPostsBySProvider(userId:Number){
    return this.http.get<Post[]>(`${environment.apiUrl}/${this.endpoint}/${userId}`);
  }
}

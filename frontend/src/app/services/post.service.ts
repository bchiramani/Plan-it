import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _subject = new BehaviorSubject<Post>(null);
  readonly subject$ = this._subject.asObservable();
  posts :Array<Post> = [
    {id:0,sproviderId:3,description:"Post number 0",image:"../assets/img/team-1.jpg"}, 
    {id:1,sproviderId:3,description:"Post number 1",image:"../assets/img/team-1.jpg"},
    {id:2,sproviderId:3,description:"Post number 2",image:"../assets/img/team-1.jpg"},
    {id:3,sproviderId:2,description:"Post number 3",image:"../assets/img/team-1.jpg"},
    {id:4,sproviderId:10,description:"Post number 4",image:"../assets/img/team-1.jpg"},

  ];
  constructor() { }
  addPost(sprovider:number,description:string,image:string) {
    let post =new Post(this.posts.length+1,sprovider,description,image)
    this.posts.push(post);
    return this.posts
  }
  getAll() {
    return this.posts
  }
  getSproviderPosts(sproviderId:Number){
    let sproviderPosts :Array<Post> = []
    for(let i=0;i<this.posts.length;i++){
      if (this.posts[i].sproviderId==sproviderId)
        sproviderPosts.push(this.posts[i])
    }
    return sproviderPosts
  }
}

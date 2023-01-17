import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent {
  posts =[];
  constructor(private postService:PostService){}

  ngOnInit(){
   
    this.postService.getAllPosts().subscribe(data =>{
      
      for (let i = 0; i < data.length; i++){
        this.posts.push(<Post>data[i])
      }
      
    })
  }
}

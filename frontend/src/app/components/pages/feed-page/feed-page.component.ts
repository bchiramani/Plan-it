import { Component } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent {
  posts : Array<Post>;
  constructor(private postService:PostService){}

  ngOnInit(){
   
    this.postService.getAllPosts().subscribe(
      (data) => {
        this.posts=data;
      }
    )
    console.log(this.posts)
  }
}

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
    this.posts=this.postService.getAll()
    console.log(this.posts)
  }
}

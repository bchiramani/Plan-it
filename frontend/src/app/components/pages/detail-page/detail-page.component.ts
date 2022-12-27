import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { SProvider } from 'src/app/models/SProvider';
import { PostService } from 'src/app/services/post.service';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  sprovider :SProvider;
  posts : Array<Post>;
  constructor(private sproviderService : SproviderService, private postService : PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id ;
    
    this.activatedRoute.params.subscribe(
      params=>{id=params['id']}
    );
    this.sprovider=this.sproviderService.getById(id)
      console.log(this.sprovider)

    this.posts=this.postService.getSproviderPosts(id)
    console.log(this.posts)
    // queryParams
    // this.route.queryParams.subscribe(params => {
    //   console.log("at details :",params); 
    //   this.user = params
    //   console.log(this.user); 
    //   }
    // );
  }

}

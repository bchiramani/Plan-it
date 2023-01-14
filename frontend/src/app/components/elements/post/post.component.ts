import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post :Post
  sprovider: User;
  constructor(private router:Router,private sproviderService:SproviderService) {}

  ngOnInit() {
    this.sprovider=this.sproviderService.getById(this.post.userId)
  }

  viewDetailsSProvider(){
    //redirect vers details sprovider
    this.router.navigate(['sproviderdetails', this.sprovider.id])
  }

}

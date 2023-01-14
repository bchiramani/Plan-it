
import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-inversed-card',
  templateUrl: './inversed-card.component.html',
  styleUrls: ['./inversed-card.component.css']
})
export class InversedCardComponent implements OnInit {
  @Input() sprovider: User;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  viewDetails(){
    this.router.navigate(['sproviderdetails',this.sprovider.id])
  }

}

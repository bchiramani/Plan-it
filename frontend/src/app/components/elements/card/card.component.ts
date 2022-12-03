import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SProvider } from 'src/app/models/SProvider';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() sprovider:SProvider;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewDetails(){
    this.router.navigate(['sproviderdetails',this.sprovider.id])
  }

}

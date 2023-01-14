import { Component,Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() category: string
  chefs: Array<User>
  constructor(private sproviderservice: SproviderService) { }



  ngOnInit() {
    console.log(this.category)
    this.chefs = this.sproviderservice.getByCategory(this.category)
    console.log(this.chefs)
  }

}

import { Component,Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() type: string
  sproviders: Array<User>
  constructor(private sproviderservice: SproviderService) { }



  ngOnInit() {
    this.sproviderservice.getByServiceType(this.type).subscribe(data => {
      for (let id in data){
        this.sproviders.push(data[id])
      }
    })
   
  }

}

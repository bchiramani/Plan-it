import { Component, OnInit } from '@angular/core';
import { SProvider } from 'src/app/models/SProvider';
import { SproviderService } from 'src/app/services/sprovider.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  categories: string[];

  constructor(private sproviderservice: SproviderService) { }

  ngOnInit() {
    // this.chefs=this.sproviderservice.getByCategory("Chef")
    // console.log(this.chefs)
    // this.decorators=this.sproviderservice.getByCategory("Decorator")
    // console.log(this.decorators)
    // this.musiciens=this.sproviderservice.getByCategory("Musicien")
    // console.log(this.musiciens)
    this.categories= this.sproviderservice.getCategories()
    console.log(this.categories)

  }

}

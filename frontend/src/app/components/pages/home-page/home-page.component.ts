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

    this.categories= this.sproviderservice.getCategories()

  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: Product[];

  //Parameters(user input) for the filters
  drinkStyle = '';
  sortbyParam = '';
  sortDirection = 'asc';
  sortbyPrice = '';

  //Use dependency injection to call the service 
  constructor(private backendApiService: BackendApiService) { }

  ngOnInit() {

    //Filled the products array with the data retrieved from the back-end API
    this.backendApiService.getProducts().subscribe(data => {
      //console.log(data);
      this.products = data;
       
    });
  }

  //Solves the descending or ascending logic for the sorting 
  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
  }

  //Clears the respective filter
  onDrinkFilterClear() {
    this.drinkStyle = '';
    //this.City = '';
  }

  //Clears the respective filter
  onPriceFilterClear() {
    this.sortbyPrice = '';
  }

  // onParamFilterClear() {
  //   this.SortbyParam = '';
  //   this.SortDirection = 'asc';
  // }
  
}

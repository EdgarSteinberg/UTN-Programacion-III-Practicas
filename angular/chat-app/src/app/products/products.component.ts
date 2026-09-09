import { Component, OnInit } from '@angular/core';
/* import { productList } from './products.mock'; */
import { Iproduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: Iproduct[] = [];

  constructor(private _apiService: ApiService) { }


  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: Iproduct[]) => {
       
      this.productList = data;
    })
  }
}

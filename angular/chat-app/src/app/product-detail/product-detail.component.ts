import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from '../models/product.model';
import { ApiService } from '../services/api.service';
/* import { Product, productList } from '../products/products.mock'; */

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product?: Iproduct;
  /*   color: string = ''; */
  /*  productList: Iproduct[] = [] */
  loading: boolean = true;
  color: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) { }


  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProductById(Number(params['productId'])).subscribe({
          next: (data: Iproduct) => {
            this.product = data;

            // Casteo/comparación del precio
            this.color = this.product.price > 5 ? 'red' : '';

            this.loading = false;
          },
          error: (error: any) => {
            console.log(error);
            
          }
        });
      }
    });
  }

  /*  ngOnInit(): void {
     setTimeout(() => {
       this._route.params.subscribe(params => {
         console.log(params['productId']); 
          this.producto = params['productId']; 
         this.color = params['category']; 
         this.product = this.productList.find(product => product.id == params['productId']);
         this.color = this.product?.price as number > 5 ? 'red' : '';
         this.loading = false;
       })
     }, 1500);
   } */
}

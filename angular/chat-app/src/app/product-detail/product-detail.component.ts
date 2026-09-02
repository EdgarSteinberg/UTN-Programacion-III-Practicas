import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  /*   color: string = ''; */
  productList: Product[] = productList
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params => {
        /* console.log(params['productId']); */
        /* this.producto = params['productId']; */
        /* this.color = params['category']; */
        this.product = this.productList.find(product => product.id == params['productId']);
        this.color = this.product?.price as number > 5 ? 'red' : '';
        this.loading = false;
      })
    }, 1500);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Iproduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = `https://fakestoreapi.com/products`;

  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<Iproduct[]> {
    return this._httpClient.get<Iproduct[]>(this.baseUrl); // Devuelve un observable de tipo Productos
  }

  public getProductById(id: number): Observable<Iproduct> {
    return this._httpClient.get<Iproduct>(`${this.baseUrl}/${id}`);  // Devuelve un observable de un Producto
  }

  public getAllCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`)
  }

  public createProduct(product: Iproduct): Observable<Iproduct> {
    return this._httpClient.post<Iproduct>(`${this.baseUrl}`, product);
  }

  public updateProduct(id: number,product: Iproduct): Observable<Iproduct> {
    return this._httpClient.put<Iproduct>(`${this.baseUrl}/${id}`, product);
  }

  public deleteProduct(id:number): Observable<Iproduct>{
    return this._httpClient.delete<Iproduct>(`${this.baseUrl}/${id}`)
  }
}

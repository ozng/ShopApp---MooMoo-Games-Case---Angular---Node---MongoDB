import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductData } from '../models/product.model';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductData> {
    return this.http.get<ProductData>(`${environment.apiUrl}/product/get_all`);
  }

  getProductsByCategory(categoryId: string): Observable<ProductData> {
    return this.http.get<ProductData>(
      `${environment.apiUrl}/product/get_category/${categoryId}`
    );
  }

  search(text: string): Observable<ProductData> {
    console.log(text);
    return this.http.get<ProductData>(
      `${environment.apiUrl}/product/search/${text}`
    );
  }

  getProductByID(productID: string): Observable<ProductData> {
    return this.http.get<ProductData>(
      `${environment.apiUrl}/product/get/${productID}`
    );
  }
}

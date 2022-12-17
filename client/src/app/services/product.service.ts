import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}

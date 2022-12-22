import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductData } from '../models/product.model';
import { environment } from '../../environment/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private userService: AuthService) {}

  getAllProducts(): Observable<ProductData> {
    return this.http.get<ProductData>(`${environment.apiUrl}/product/get_all`);
  }

  getProductsByCategory(categoryId: string): Observable<ProductData> {
    return this.http.get<ProductData>(
      `${environment.apiUrl}/product/get_category/${categoryId}`
    );
  }

  search(text: string): Observable<ProductData> {
    return this.http.get<ProductData>(
      `${environment.apiUrl}/product/search/${text}`
    );
  }

  getProductByID(productID: string): Observable<ProductData> {
    return this.http.get<ProductData>(
      `${environment.apiUrl}/product/get/${productID}`
    );
  }

  addRemoveFavorite(productID: string): Observable<any> {
    const user = this.userService.getUser();

    const userID = user._id;

    return this.http.put<any>(`${environment.apiUrl}/user/favorite/${userID}`, {
      productID: productID,
    });
  }

  getUserFavoriteProducts(): Observable<any> {
    const user = this.userService.getUser();

    const userID = user._id;

    return this.http.get<any>(
      `${environment.apiUrl}/user/get_favorite/${userID}`
    );
  }

  isFavorite(productID: string): any {
    const user = this.userService.getUser();

    const userID = user._id;

    if (!user) {
      return false;
    }

    return this.http.get<any>(
      `${environment.apiUrl}/user/is_favorite/${userID}/${productID}`
    );
  }
}

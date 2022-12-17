import { Component, OnInit } from '@angular/core';
import { ProductData } from '../models/product.model';
import { ProductService } from '../services/product.service';

import { Store } from '@ngrx/store';
import {
  getAllProduct as getAllProductFromAPI,
  getCategoryProduct,
} from '../store/products/product.actions';
import { selectAllProducts } from '../store/products/product.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public allProduct$ = this.store.select(selectAllProducts);

  productList?: any;

  constructor(private productService: ProductService, private store: Store) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.store.dispatch(getAllProductFromAPI({ products: response }));
        this.productList = this.allProduct$;

        console.log(response);
      },
    });
  }
}

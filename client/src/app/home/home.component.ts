import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import { Store } from '@ngrx/store';
import {
  getAllProduct as getAllProductFromAPI,
  search,
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

  query?: string;

  constructor(private productService: ProductService, private store: Store) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.store.dispatch(getAllProductFromAPI({ products: response }));
        this.productList = this.allProduct$;
      },
    });
  }
  // }
}

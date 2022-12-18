import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { search } from 'src/app/store/products/product.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private productService: ProductService, private store: Store) {}

  searchText?: string;

  searchedProduct = [];

  searchHandler() {
    this.productService
      .search(
        this.searchText!.charAt(0).toUpperCase() + this.searchText!.slice(1)
      )
      .subscribe({
        next: (response) => {
          this.store.dispatch(search({ products: response }));
        },
      });
  }
}

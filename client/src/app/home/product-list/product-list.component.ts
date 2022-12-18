import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSelectedProduct as selectProduct } from 'src/app/store/products/product.actions';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() productList: any = [];

  constructor(private store: Store) {}

  setSelectedProduct(selectedProduct: any) {
    this.store.dispatch(selectProduct(selectedProduct));
  }
}

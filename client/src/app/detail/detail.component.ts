import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedProduct } from '../store/products/product.selectors';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public selectedProduct$ = this.store.select(selectSelectedProduct);

  product?: any;

  selectedProduct?: any;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.product = this.selectedProduct$;

    this.selectedProduct = this.product.actionsObserver._value;
  }
}

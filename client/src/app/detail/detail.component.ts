import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  productId: string = '';

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  quantity: number = 1;

  ngOnInit(): void {
    this.product = this.selectedProduct$;

    this.selectedProduct = this.product.actionsObserver._value;

    this.productId = this.activatedRoute.snapshot.paramMap.get('id')!;

    console.log(this.productId);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from '../services/product.service';
import { setSelectedProduct } from '../store/products/product.actions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  selectedProduct?: any;

  productId: string = '';

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  quantity: number = 1;

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')!;

    this.productService.getProductByID(this.productId).subscribe({
      next: (response) => {
        this.store.dispatch(setSelectedProduct({ selectedProduct: response }));
        this.selectedProduct = response;
      },
    });

    console.log(this.productId);
  }
}

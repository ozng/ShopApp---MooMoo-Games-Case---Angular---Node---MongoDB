import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from '../services/product.service';
import { selectAllProducts } from '../store/products/product.selectors';
import { search } from '../store/products/product.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss', './search.component.media.scss'],
})
export class SearchComponent implements OnInit {
  public allProduct$ = this.store.select(selectAllProducts);

  productList: any;
  query = '';

  constructor(
    private productService: ProductService,
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.query = this.activatedRoute.snapshot.paramMap.get('query')!;

    this.productService
      .search(this.query!.charAt(0).toUpperCase() + this.query!.slice(1))
      .subscribe({
        next: (response) => {
          this.store.dispatch(search({ products: response }));
          this.productList = this.allProduct$;
        },
      });
  }
}

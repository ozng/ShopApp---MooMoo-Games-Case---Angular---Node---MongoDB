import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/product.service';
import { getCategoryProduct } from '../../../store/products/product.actions';

interface Category {
  name: string;
  id: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() category: Category[] = [];

  constructor(private productService: ProductService, private store: Store) {}

  getProductByCategory(categoryId: string) {
    this.productService.getProductsByCategory(categoryId).subscribe({
      next: (response) => {
        this.store.dispatch(getCategoryProduct({ products: response }));
      },
    });
  }
}

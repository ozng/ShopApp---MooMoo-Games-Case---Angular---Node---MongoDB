import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/models/product.model';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList?: [ProductData];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.productList = <any>response;

        console.log(response);
      },
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router, private productService: ProductService) {}

  navigateToDetailHandler() {
    this.router.navigate([`/detail/${this.product._id}`]);
  }

  isFavorite?: any;

  toggleFavorite() {
    this.productService.addRemoveFavorite(this.product._id).subscribe({
      next: () => {
        this.isFavorite = !this.isFavorite;
      },
    });
  }

  ngOnInit(): void {
    this.productService.isFavorite(this.product._id).subscribe({
      next: (response) => {
        this.isFavorite = response;
      },
    });
  }
}

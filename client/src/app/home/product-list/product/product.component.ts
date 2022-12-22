import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor(
    private router: Router,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  navigateToDetailHandler() {
    this.router.navigate([`/detail/${this.product._id}`]);
  }

  isFavorite?: any;

  toggleFavorite() {
    const user = this.authService.getUser();

    if (user) {
      this.productService.addRemoveFavorite(this.product._id).subscribe({
        next: () => {
          this.isFavorite = !this.isFavorite;
        },
      });
    } else {
      this.router.navigate(['auth/login']);
    }
  }

  ngOnInit(): void {
    const user = this.authService.getUser();

    if (user) {
      this.productService.isFavorite(this.product?._id).subscribe({
        next: (response: any) => {
          this.isFavorite = response;
        },
      });
    } else {
      this.isFavorite = false;
    }
  }
}

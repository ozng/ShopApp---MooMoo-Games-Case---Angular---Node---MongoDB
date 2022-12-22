import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss', './favorite.component.media.scss'],
})
export class FavoriteComponent implements OnInit {
  constructor(private route: Router, private productService: ProductService) {}

  favoriteProducts?: any;

  ngOnInit(): void {
    this.productService.getUserFavoriteProducts().subscribe({
      next: (response) => {
        this.favoriteProducts = response;
      },
    });
  }
}

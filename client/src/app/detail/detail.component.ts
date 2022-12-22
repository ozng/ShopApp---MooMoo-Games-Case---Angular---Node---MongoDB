import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss', './detail.component.media.scss'],
})
export class DetailComponent implements OnInit {
  selectedProduct?: any;

  productId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  quantity: number = 1;

  handleAddToCart() {
    const cartItem: any = {
      quantity: this.quantity,
      product: this.selectedProduct,
    };

    const cartLists = [];

    const resDataCurrentCart = localStorage.getItem('cart');
    const resData = JSON.parse(resDataCurrentCart!);

    if (resData) {
      const index = resData.findIndex(
        (item: any) => item.product._id === cartItem.product._id
      );
      if (index === -1) {
        resData.push(cartItem);
        const jsonData = JSON.stringify(resData);
        localStorage.setItem('cart', jsonData);
      } else {
        const updatedData = resData.map((obj: any) => {
          if (obj.product._id === cartItem.product._id) {
            return { ...obj, quantity: this.quantity };
          }
          return obj;
        });

        const jsonData = JSON.stringify(updatedData);
        localStorage.setItem('cart', jsonData);
      }
    } else {
      cartLists.push(cartItem);
      const jsonDataTwo = JSON.stringify(cartLists);
      localStorage.setItem('cart', jsonDataTwo);
    }

    this.router.navigate(['cart']);
  }

  handleQuantity(type: string) {
    if (type === 'inc') {
      if (this.quantity === this.selectedProduct.quantity) {
        return;
      }
      this.quantity = this.quantity + 1;
    } else if (type === 'dec') {
      if (this.quantity === 1) {
        return;
      }
      this.quantity = this.quantity - 1;
    }
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')!;

    this.productService.getProductByID(this.productId).subscribe({
      next: (response) => {
        this.selectedProduct = response;
      },
    });
  }
}

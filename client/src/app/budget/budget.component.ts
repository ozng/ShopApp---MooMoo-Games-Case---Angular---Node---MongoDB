import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss', './budget.component.media.scss'],
})
export class BudgetComponent implements OnInit {
  cartList: any = [];

  totalProductPrice: number = 0;
  transportCost: number = 0;
  totalAmount: number = 0;

  constructor(private route: Router) {}

  navigateHandler(productID: string) {
    this.route.navigate([`detail/${productID}`]);
  }

  reCalculateTotalAmount() {
    this.totalProductPrice = 0;
    this.totalAmount = 0;

    this.cartList.forEach((item: any) => {
      this.totalProductPrice += item.quantity * item.product.price;
    });

    this.totalAmount = this.totalProductPrice + this.transportCost;
  }

  quantityChangeHandler(productID: string, type: string) {
    const resDataCurrentCart = localStorage.getItem('cart');
    const resData = JSON.parse(resDataCurrentCart!);

    const updatedData = resData.map((obj: any) => {
      if (obj.product._id === productID) {
        return {
          ...obj,
          quantity:
            type === 'i'
              ? obj.quantity < obj.product.quantity
                ? (obj.quantity = obj.quantity + 1)
                : (obj.quantity = obj.product.quantity)
              : obj.quantity === 1
              ? (obj.quantity = 1)
              : obj.quantity - 1,
        };
      }
      return obj;
    });

    this.cartList = updatedData;

    const jsonData = JSON.stringify(updatedData);
    localStorage.setItem('cart', jsonData);

    this.reCalculateTotalAmount();
  }

  deleteFromCartHandler(id: string) {
    const resDataCurrentCart = localStorage.getItem('cart');
    const resData = JSON.parse(resDataCurrentCart!);

    const deletedCartList = resData.filter(
      (item: any) => item.product._id !== id
    );

    if (deletedCartList.length < 1) {
      this.transportCost = 0;
    }

    this.cartList = deletedCartList;

    const jsonData = JSON.stringify(deletedCartList);
    localStorage.setItem('cart', jsonData);

    this.reCalculateTotalAmount();
  }

  ngOnInit(): void {
    const resData = localStorage.getItem('cart');

    const cartData = JSON.parse(resData!);

    this.cartList = cartData;

    if (cartData.length > 0) {
      this.transportCost = 35;
    }

    this.reCalculateTotalAmount();
  }
}

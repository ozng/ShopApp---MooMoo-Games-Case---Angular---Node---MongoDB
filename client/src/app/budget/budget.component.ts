import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  cartList: any = [];

  totalProductPrice: number = 0;
  transportCost: number = 35;
  totalAmount: number = 0;

  ngOnInit(): void {
    const resData = localStorage.getItem('cart');

    const cartData = JSON.parse(resData!);

    this.cartList = cartData;

    cartData.forEach((item: any) => {
      this.totalProductPrice += item.quantity * item.product.price;
    });

    this.totalAmount = this.totalProductPrice + this.transportCost;
  }
}

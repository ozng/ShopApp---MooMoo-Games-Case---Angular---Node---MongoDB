import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  cartList: any = [];

  async ngOnInit(): Promise<void> {
    const resData = await localStorage.getItem('cart');

    this.cartList = JSON.parse(resData!);

    console.log(this.cartList);
  }
}

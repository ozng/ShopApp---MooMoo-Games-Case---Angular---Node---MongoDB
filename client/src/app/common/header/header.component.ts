import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText?: string;

  cartProductLength?: any;

  constructor(private router: Router, private store: Store) {}

  resetSearchInput() {
    this.searchText = '';
  }

  navigateHandler() {
    this.router.navigate(['cart']);
  }

  searchHandler() {
    this.router.navigate([`search/${this.searchText}`]);
  }

  ngOnInit(): void {
    const resData = localStorage.getItem('cart');

    const cartItems = JSON.parse(resData!);

    this.cartProductLength = cartItems.length;
  }
}

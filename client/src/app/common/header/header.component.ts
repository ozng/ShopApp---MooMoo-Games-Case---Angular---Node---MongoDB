import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText?: string;

  cartProductLength?: any;

  user?: any;

  constructor(private router: Router, private authService: AuthService) {}

  resetSearchInput() {
    this.searchText = '';
  }

  navigateHandler() {
    this.router.navigate(['cart']);
  }

  searchHandler() {
    this.router.navigate([`search/${this.searchText}`]);
  }

  logoutHandler() {
    this.authService.deleteUserFromLS();
    this.router.navigate(['auth/login']);
  }

  ngOnInit(): void {
    const resData = localStorage.getItem('cart');

    const cartItems = JSON.parse(resData!);

    this.user = this.authService.getUser();

    console.log(this.user);

    this.cartProductLength = cartItems.length;
  }
}

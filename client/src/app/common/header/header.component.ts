import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.media.scss'],
})
export class HeaderComponent implements OnInit {
  searchText?: string;

  cartProductLength?: any;

  user?: any;

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router: Router, private authService: AuthService) {}

  resetSearchInput() {
    this.searchText = '';
  }

  navigateHandler(route: string) {
    this.router.navigate([route]);
  }

  searchHandler() {
    this.navigateHandler(`search/${this.searchText}`);
  }

  ngOnInit(): void {
    const resData = localStorage.getItem('cart');

    const cartItems = JSON.parse(resData!);

    this.user = this.authService.getUser();

    this.cartProductLength = cartItems.length;
  }
}

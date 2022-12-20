import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginIn = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  loginOrRegister: any = this.activatedRoute.snapshot.paramMap.get('type');

  setStatusToLogin() {
    this.isLoginIn = true;
  }

  setStatusToRegister() {
    this.isLoginIn = false;
  }

  submitHandler() {}

  ngOnInit(): void {
    if (this.loginOrRegister === 'login') {
      this.isLoginIn = true;
    } else if (this.loginOrRegister === 'register') {
      this.isLoginIn = false;
    }
  }
}

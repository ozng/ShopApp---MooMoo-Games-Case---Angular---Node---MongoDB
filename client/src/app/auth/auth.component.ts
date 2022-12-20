import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginIn = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  loginOrRegister: any = this.activatedRoute.snapshot.paramMap.get('type');

  email?: string;
  password?: string;
  name?: string;
  gender?: string;

  setGender(gender: string) {
    this.gender = gender;
  }

  setStatusToLogin() {
    this.isLoginIn = true;

    this.email = '';
    this.password = '';
    this.name = '';
    this.gender = '';
  }

  setStatusToRegister() {
    this.isLoginIn = false;

    this.email = '';
    this.password = '';
    this.name = '';
    this.gender = '';
  }

  submitHandler() {
    if (this.isLoginIn) {
      this.authService
        .loginHandler({
          email: this.email,
          password: this.password,
        })
        .subscribe({
          next: (response) => {
            const resData = JSON.stringify(response);
            localStorage.setItem('user', resData);
            this.router.navigate(['']);
          },
        });
    } else {
      this.authService
        .registerHandler({
          email: this.email,
          password: this.password,
          username: this.name,
          gender: this.gender,
        })
        .subscribe({
          next: (response) => {
            const resData = JSON.stringify(response);
            localStorage.setItem('user', resData);
            this.router.navigate(['']);
          },
        });
    }
  }

  ngOnInit(): void {
    if (this.loginOrRegister === 'login') {
      this.isLoginIn = true;
    } else if (this.loginOrRegister === 'register') {
      this.isLoginIn = false;
    }
  }
}

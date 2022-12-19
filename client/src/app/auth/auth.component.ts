import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoginIn = true;

  setStatusToLogin() {
    this.isLoginIn = true;
  }

  setStatusToRegister() {
    this.isLoginIn = false;
  }

  submitHandler() {}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private authService: AuthService, private route: Router) {}

  logoutHandler() {
    this.authService.deleteUserFromLS();
    this.route.navigate(['auth/login']);
  }
}

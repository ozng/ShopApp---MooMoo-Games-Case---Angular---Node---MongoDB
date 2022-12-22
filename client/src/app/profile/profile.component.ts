import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', './profile.component.media.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private route: Router) {}

  logoutHandler() {
    this.authService.deleteUserFromLS();
    this.route.navigate(['auth/login']);
  }

  user: any;

  gender?: string;

  formSubmitHandler() {}

  setGender(gender: string) {
    this.gender = gender;
  }

  ngOnInit(): void {
    const userData = this.authService.getUser();

    this.gender = userData.gender ? userData.gender : ' ';

    this.user = userData;
  }
}

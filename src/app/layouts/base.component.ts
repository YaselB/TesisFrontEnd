import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';
import { User } from 'src/app/core/auth/user.model';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  isCollapsedLeft = false;
  isCollapsedRight = false;
  name = '';

  currentUser: User | null;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.currentUser = authenticationService.getCurrentUser();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isCollapsedLeftChange() {
    this.isCollapsedLeft = !this.isCollapsedLeft;
  }
  isCollapsedRightChange() {
    this.isCollapsedRight = !this.isCollapsedRight;
  }
}

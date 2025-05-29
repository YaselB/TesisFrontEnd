import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  changeIsCollapsed = new EventEmitter<boolean>();

  isCollapsed: boolean = false;
  userName?: string;
  userTime?: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.userName = this.authenticationService.getCurrentUser()?.name;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isCollapsedMethod() {
    this.changeIsCollapsed.emit(!this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
  }
}

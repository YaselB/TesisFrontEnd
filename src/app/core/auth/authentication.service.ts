import { Injectable } from '@angular/core';
import { User } from './user.model';
import { PermissionsService } from './permissions.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUser: User | null = null;
  private jwtToken: string | null = null;

  constructor(protected permissions: PermissionsService) {
    this.fetchJwtToken();
  }

  login(
    token: string,
    userData: User | null,
    store?: boolean,
    permissions?: string[],
  ) {
    this.jwtToken = token;
    this.currentUser = userData;
    if (store === true && userData !== null) {
      this.storeJwtToken(token, userData);
    }
    if (permissions !== undefined) {
      this.permissions.setPermissions(permissions);
    }
  }

  logout() {
    this.removeJwtTokens();
    this.currentUser = null;
    this.jwtToken = null;
    this.permissions.flushPermissions();
    // this.router.navigate(['/login']               );
  }

  isLoggedIn(): boolean {
    // return this.currentUser !== null;
    return true;
  }

  getJwtToken(): string | null {
    //Gets the auth token.
    return this.jwtToken;
  }

  getCurrentUser(): User | null {
    //Gets the current user.
    return this.currentUser;
  }

  private storeJwtToken(jwt: string, user: User) {
    localStorage.setItem('jwtToken', jwt);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private removeJwtTokens() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userData');
  }

  private fetchJwtToken() {
    this.jwtToken = localStorage.getItem('jwtToken') ?? null;
    this.currentUser = localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData') as string)
      : null;
  }
}

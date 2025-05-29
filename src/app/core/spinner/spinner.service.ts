import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingSpinnerService {
  public loading = false;

  hide() {
    this.loading = false;
  }

  show() {
    this.loading = true;
  }
}

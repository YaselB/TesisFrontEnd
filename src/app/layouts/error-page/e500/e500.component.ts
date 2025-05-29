import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-e500',
  templateUrl: './e500.component.html',
  styleUrls: ['./e500.component.scss'],
})
export class E500Component {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}

import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.scss'],
})
export class E404Component {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}

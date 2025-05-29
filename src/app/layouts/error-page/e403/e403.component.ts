import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-e403',
  templateUrl: './e403.component.html',
  styleUrls: ['./e403.component.scss'],
})
export class E403Component {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}

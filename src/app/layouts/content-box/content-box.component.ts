import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingSpinnerService } from 'src/app/core/spinner/spinner.service';

@Component({
  selector: 'app-content-box',
  templateUrl: 'content-box.component.html',
  styleUrls: ['content-box.component.scss'],
})
export class ContentBoxComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    public loadingSpinner: LoadingSpinnerService,
  ) {}
}

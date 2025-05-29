import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationsService {
  constructor(public translate: TranslateService) {}

  getProfileLanguage(): string {
    return 'es';
  }

  getSystemLanguages(): string[] {
    return ['es', 'en'];
  }
}

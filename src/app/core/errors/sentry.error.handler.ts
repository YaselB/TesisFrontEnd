import { ErrorHandler, Injectable } from '@angular/core';
import { captureException, init } from '@sentry/browser';
import { environment } from 'src/environments/environment';

init({
  dsn: environment.sentryUrl,
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    if (environment.production) {
      captureException(error);
    }
  }
}

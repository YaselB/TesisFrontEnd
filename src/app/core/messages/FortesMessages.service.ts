import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApplicationMessages } from './applicationMessages';

@Injectable({
  providedIn: 'root',
})
export class FortesMessagesService {
  constructor(private notificationService: NzNotificationService) {}

  success(message: string, title?: string): void {
    this.notificationService.success(
      title ?? ApplicationMessages.systemMessages.successTitle,
      message,
    );
  }

  error(message: string, title?: string): void {
    this.notificationService.error(
      title ?? ApplicationMessages.systemMessages.errorTitle,
      message,
    );
  }

  errorPreventRepeat(message: string, title?: string): void {
    this.notificationService.remove();
    this.notificationService.error(message, title ?? '');
  }

  create(
    message: string,
    type: 'success' | 'info' | 'warning' | 'error' | 'blank',
    title?: string,
  ): void {
    this.notificationService.create(
      type,
      title ?? ApplicationMessages.systemMessages.defaultTitle,
      message,
    );
  }
}

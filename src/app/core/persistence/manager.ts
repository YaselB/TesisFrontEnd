import { HttpClient } from '@angular/common/http';
import { LoadingSpinnerService } from '../spinner/spinner.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApplicationMessages } from '../messages/applicationMessages';
import { Response } from './Response.model';
import { environment } from 'src/environments/environment';

export class Manager {
  endpoint!: string;
  constructor(
    protected http: HttpClient,
    protected loadingSpinner: LoadingSpinnerService,
    protected messageService: NzMessageService,
  ) {}

  get = async (
    limit?: number,
    offset?: number,
    search?: string,
    ordering?: string,
    filters?: string,
  ): Promise<null | Response> => {
    this.loadingSpinner.show();
    this.http
      .get(
        `${environment.apiUrl + this.endpoint}?limit=${limit ?? null}&offset=${
          offset ?? null
        }&search=${search ?? ''}&ordering=${ordering ?? 'is_disable, name'}${
          filters ?? ''
        }`,
      )
      .subscribe({
        next: (arg) => {
          return arg;
        },
        error: () =>
          this.messageService.error(
            ApplicationMessages.systemMessages.errorAPiConnection,
          ),
        complete: () => this.loadingSpinner.hide(),
      });
    return null;
  };

  getOrdered = async (ordering: string): Promise<null | Response> => {
    this.loadingSpinner.show();
    this.http
      .get(`${environment.apiUrl + this.endpoint}?ordering=${ordering}`)
      .subscribe({
        next: (arg) => {
          return arg;
        },
        error: () =>
          this.messageService.error(
            ApplicationMessages.systemMessages.errorAPiConnection,
          ),
        complete: () => this.loadingSpinner.hide(),
      });
    return null;
  };

  getById = async (id: string): Promise<null | Response> => {
    this.loadingSpinner.show();
    this.http.get(`${environment.apiUrl + this.endpoint}${id}/`).subscribe({
      next: (arg) => {
        return arg;
      },
      error: () =>
        this.messageService.error(
          ApplicationMessages.systemMessages.errorAPiConnection,
        ),
      complete: () => this.loadingSpinner.hide(),
    });
    return null;
  };

  create = async (body: object): Promise<null | Response> => {
    this.loadingSpinner.show();
    this.http.post(`${environment.apiUrl + this.endpoint}`, body).subscribe({
      next: (arg) => {
        this.messageService.success(ApplicationMessages.systemMessages.success);
        return arg;
      },
      error: () =>
        this.messageService.error(
          ApplicationMessages.systemMessages.errorAPiConnection,
        ),
      complete: () => this.loadingSpinner.hide(),
    });
    return null;
  };

  update = async (id: string, body: never): Promise<null | Response> => {
    this.loadingSpinner.show();
    this.http
      .put(`${environment.apiUrl + this.endpoint}${id}/`, body)
      .subscribe({
        next: (arg) => {
          this.messageService.success(
            ApplicationMessages.systemMessages.success,
          );
          return arg;
        },
        error: () =>
          this.messageService.error(
            ApplicationMessages.systemMessages.errorAPiConnection,
          ),
        complete: () => this.loadingSpinner.hide(),
      });
    return null;
  };

  patch = async (id: string, body: never): Promise<null | Response> => {
    this.loadingSpinner.show();
    this.http
      .patch(`${environment.apiUrl + this.endpoint}${id}/`, body)
      .subscribe({
        next: (arg) => {
          this.messageService.success(
            ApplicationMessages.systemMessages.success,
          );
          return arg;
        },
        error: () =>
          this.messageService.error(
            ApplicationMessages.systemMessages.errorAPiConnection,
          ),
        complete: () => this.loadingSpinner.hide(),
      });
    return null;
  };

  delete = async (id: string): Promise<null | Response> => {
    this.loadingSpinner.show();
    this.http.delete(`${environment.apiUrl + this.endpoint}${id}/`).subscribe({
      next: (arg) => {
        this.messageService.success(ApplicationMessages.systemMessages.success);
        return arg;
      },
      error: () =>
        this.messageService.error(
          ApplicationMessages.systemMessages.errorAPiConnection,
        ),
      complete: () => this.loadingSpinner.hide(),
    });
    return null;
  };
}

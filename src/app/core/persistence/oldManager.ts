import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './Response.model';
import { environment } from 'src/environments/environment';

export class OldManager {
  endpoint!: string;
  constructor(protected http: HttpClient) {}

  get = (
    limit?: number,
    offset?: number,
    search?: string,
    ordering?: string,
    filters?: string,
  ): Observable<Response> => {
    return this.http.get(
      `${environment.apiUrl + this.endpoint}?limit=${limit ?? null}&offset=${
        offset ?? null
      }&search=${search ?? ''}&ordering=${ordering ?? 'is_disable, name'}${
        filters ?? ''
      }`,
    ) as Observable<Response>;
  };

  getOrdered = (ordering: string): Observable<Response> => {
    return this.http.get(
      `${environment.apiUrl + this.endpoint}?ordering=${ordering}`,
    ) as Observable<Response>;
  };

  getById = (id: string): Observable<Response> => {
    return this.http.get(
      `${environment.apiUrl + this.endpoint}${id}/`,
    ) as Observable<Response>;
  };

  create = (body: object): Observable<Response> => {
    return this.http.post(
      `${environment.apiUrl + this.endpoint}`,
      body,
    ) as Observable<Response>;
  };

  update = (id: string, body: never): Observable<Response> => {
    return this.http.put(
      `${environment.apiUrl + this.endpoint}${id}/`,
      body,
    ) as Observable<Response>;
  };

  patch = (id: string, body: never): Observable<Response> => {
    return this.http.patch(
      `${environment.apiUrl + this.endpoint}${id}/`,
      body,
    ) as Observable<Response>;
  };

  delete = (id: string): Observable<Response> => {
    return this.http.delete(
      `${environment.apiUrl + this.endpoint}${id}/`,
    ) as Observable<Response>;
  };
}

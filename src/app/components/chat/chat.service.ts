import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TextMessage } from '../../shared/models/text-messsage.model';
import { Message } from '../../shared/models/message.model';
import { Observable, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  ADD_SESSIONS_URL,
  DELETE_SESSIONS_URL,
  GET_MESSAGES_URL,
  GET_SESSIONS_URL,
  MESSAGES_URL,
  MODIFY_SESSIONS_URL,
} from '../../shared/constants/urls';
import { Session } from 'src/app/shared/models/session';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private http: HttpClient,
    private toasrService: ToastrService,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  sendMessage(
    textMessage: TextMessage,
    session_id: string,
  ): Observable<string> {
    return this.http
      .post<string>(MESSAGES_URL, { ...textMessage, session_id })
      .pipe(
        tap({
          next: () => {},
          error: (errorResponse) => {
            this.toasrService.error(errorResponse.error, 'Mensaje Fallido');
            return throwError(() => new Error('Error en el servidor'));
          },
        }),
      );
  }

  getAllSessions(user_id: string): Observable<Session[]> {
    return this.http.get<Session[]>(GET_SESSIONS_URL + user_id);
  }
  getAllMessages(sessionId: string): Observable<Message[]> {
    return this.http.get<Message[]>(GET_MESSAGES_URL + sessionId);
  }
  modify(name: string, id: string): Observable<Session[]> {
    return this.http.put<Session[]>(MODIFY_SESSIONS_URL, { name, id }).pipe(
      tap({
        next: () => {
          this.toasrService.success(
            'Se modificó el chat',
            'Satisfactoriamente',
          );
        },
        error: (errorResponse) => {
          this.toasrService.error(errorResponse.error, 'Modificación Fallida');
        },
      }),
    );
  }
  include(session: Session): Observable<Session[]> {
    return this.http.post<Session[]>(ADD_SESSIONS_URL, session).pipe(
      tap({
        next: () => {
          this.toasrService.success(
            'Se creó el nuevo chat',
            'Satisfactoriamente',
          );
        },
        error: (errorResponse) => {
          this.toasrService.error(errorResponse.error, 'Creación Fallida');
        },
      }),
    );
  }
  delete(sessionId: string): Observable<Session[]> {
    return this.http.delete<Session[]>(DELETE_SESSIONS_URL + sessionId).pipe(
      tap({
        next: () => {
          this.toasrService.success('Se elimino el chat', 'Satisfactoriamente');
        },
        error: (errorResponse) => {
          this.toasrService.error(errorResponse.error, 'Eliminación Fallida');
        },
      }),
    );
  }
}

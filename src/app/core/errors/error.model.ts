// TODO: Cuál es el tipo real de este Error que el interceptor recibe?
export interface Error {
  error: ErrorEvent;
  message: string;
  status: number;
  statusText: string;
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    const headers = new HttpHeaders({
      'x-auth-token': sessionStorage.getItem('apiToken'),
      'Content-Type': 'application/json'
    });
    return headers;
  }

  post(apiUrl: string, body: any, options?: any): Observable<any> {
    return this.http.post<any>(apiUrl, body, {});
  }

  get(apiUrl: string, pathParam: any, queryParam: any): Observable<any> {
    return this.http.get<any>(apiUrl, {headers: this.getHeaders(), params: queryParam});
  }

  put(apiUrl: string, body: any, options?: any): Observable<any>{
    return this.http.put<any>(apiUrl, body, { headers: this.getHeaders() });
  }

  delete(apiUrl: string, options?: any): Observable<any> {
    return this.http.delete<any>(apiUrl, {headers: this.getHeaders()});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://127.0.0.1:8000/query/';

  constructor(private http: HttpClient) { }

  sendQuery(query: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { query: query };
    console.log('Sending query: ', body);

    return this.http.post<{response: string}>(this.apiUrl, body, { headers }).pipe(
      map(response => response.response)
    );
  }
}

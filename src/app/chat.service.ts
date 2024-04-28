import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendQuery(query: string, history: string[]): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { query: query, history: history };
    console.log('Sending query: ', body);

    return this.http.post<{response: string}>(this.apiUrl, body, { headers }).pipe(
      map(response => response.response)
    );
  }
}
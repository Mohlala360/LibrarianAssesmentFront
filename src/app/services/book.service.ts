import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const backEndConnector = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getWeathor(): Observable<any> {
    var url = backEndConnector+'user';
    return this.http.get<any>(url);
  }
}

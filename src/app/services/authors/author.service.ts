import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Author } from 'src/app/models/authors/author';
import { Observable } from 'rxjs';

const apiCaller = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  add(author: Author): Observable<Author> {
    return this.http.post<Author>(apiCaller + 'books/author', author);
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(apiCaller + 'books/author');
  }

  getAuthor(authorId:number): Observable<Author> {
    return this.http.get<Author>(apiCaller + `books/author/${authorId}`);
  }

  update(author: Author): Observable<Author> {
    return this.http.put<Author>(apiCaller + 'books/author', author);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/books/book';
import { environment } from 'src/environments/environment';

const apiCaller = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(apiCaller + 'books', book);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(apiCaller + 'books');
  }

  getBookById(bookId:number): Observable<Book> {
    return this.http.get<Book>(apiCaller + `books/${bookId}`);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(apiCaller + 'books', book);
  }
}

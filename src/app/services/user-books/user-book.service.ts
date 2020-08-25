import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserBook } from 'src/app/models/user-books/user-book';
import { UserBookState } from 'src/app/models/user-books/user-book-state';

const apiCaller = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class UserBookService {

  constructor(private http: HttpClient) { }

  allocateBook(userBook: UserBook): Observable<UserBook> {
    return this.http.post<UserBook>(apiCaller + 'books/allocateBook', userBook);
  }

  getUserBooks(): Observable<UserBook[]> {
    return this.http.get<UserBook[]>(apiCaller + 'books/userBooks');
  }

  getuserBookById(userBookId:number): Observable<UserBook> {
    return this.http.get<UserBook>(apiCaller + `books/userBooks/${userBookId}`);
  }

  returnBook(userBook: UserBook): Observable<UserBook> {
    return this.http.put<UserBook>(apiCaller + 'books/returnBook', userBook);
  }
}
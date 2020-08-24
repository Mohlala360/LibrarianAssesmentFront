import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users/user';
import { UserType } from 'src/app/models/users/user-type';

const apiCaller = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  add(user: User): Observable<User> {
    return this.http.post<User>(apiCaller + 'user', user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiCaller + 'user');
  }

  getUser(userId: number): Observable<User[]> {
    return this.http.get<User[]>(apiCaller + `user/${userId}`);
  }

  getLibrarians(): Observable<User[]> {
    return this.http.get<User[]>(apiCaller + 'user/as/librarian');
  }

  updated(user: User): Observable<User> {
    return this.http.put<User>(apiCaller + 'user', user);
  }

  getUserTypes(): Observable<UserType[]> {
    return this.http.get<UserType[]>(apiCaller + 'users/types');
  }
}

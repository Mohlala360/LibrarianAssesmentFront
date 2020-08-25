import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users/users.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserBookDetailsComponent } from './components/user-books/user-book-details/user-book-details.component';
import { UserBookEditComponent } from './components/user-books/user-book-edit/user-book-edit.component';
import { BooksComponent } from './components/books/books/books.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { AuthorsComponent } from './components/authors/authors/authors.component';
import { AuthorEditComponent } from './components/authors/author-edit/author-edit.component';
import { UserBooksComponent } from './components/user-books/user-books/user-books.component';


const routes: Routes = [
  { path: '', component: UserBooksComponent },
  /*Users*/
  { path: 'user/add', component: UserEditComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  /*User Books*/
  { path: 'user-books', component: UserBookDetailsComponent },
  { path: 'user-book/allocate', component: UserBookEditComponent },
  { path: 'user-book/return', component: UserBookEditComponent },
  { path: 'user-book/:id', component: UserBookDetailsComponent },
  /*books*/
  { path: 'books', component: BooksComponent },
  { path: 'book/add', component: BookEditComponent },
  { path: 'book/:id', component: BookEditComponent },
  { path: 'book/edit/:id', component: BookEditComponent },
  /*authors*/
  { path: 'authors', component: AuthorsComponent },
  { path: 'author/edit/:id', component: AuthorEditComponent },
  { path: 'author/:id', component: AuthorEditComponent },
  { path: 'author/add', component: AuthorEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

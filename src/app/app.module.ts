import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/books/book.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users/users.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserBooksComponent } from './components/user-books/user-books/user-books.component';
import { AuthorsComponent } from './components/authors/authors/authors.component';
import { AuthorEditComponent } from './components/authors/author-edit/author-edit.component';
import { UserBookEditComponent } from './components/user-books/user-book-edit/user-book-edit.component';
import { UserBookDetailsComponent } from './components/user-books/user-book-details/user-book-details.component';
import { UserService } from './services/users/user.service';
import { AuthorService } from './services/authors/author.service';
import { UserBookService } from './services/user-books/user-book.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserEditComponent,
    UserDetailsComponent,
    UserBooksComponent,
    AuthorsComponent,
    AuthorEditComponent,
    UserBookEditComponent,
    UserBookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [BookService,UserService,AuthorService,UserBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

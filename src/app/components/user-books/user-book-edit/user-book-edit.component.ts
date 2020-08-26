import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserBook } from 'src/app/models/user-books/user-book';
import { UserBookService } from 'src/app/services/user-books/user-book.service';
import { UserService } from 'src/app/services/users/user.service';
import { BookService } from 'src/app/services/books/book.service';
import { Book } from 'src/app/models/books/book';
import { User } from 'src/app/models/users/user';

@Component({
  selector: 'app-user-book-edit',
  templateUrl: './user-book-edit.component.html',
  styleUrls: ['./user-book-edit.component.css']
})
export class UserBookEditComponent implements OnInit {

  pageTitle: string;
  userBook: UserBook;
  users: User[];
  books: Book[];
  allocate: boolean;

  constructor(private userBookService: UserBookService,
    private userService: UserService,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.pageTitle = 'User Book';
    this.books = [];
    this.users = [];
    this.allocate = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const edit = !!(params['id']);
      if (edit) {
        this.pageTitle = this.pageTitle + 'Edit';
        const userBookId = +params['id'];
        this.allocate = false;
        this.userBookService.getuserBookById(userBookId).subscribe((returnedUserBook: UserBook) => {
          this.userBook = returnedUserBook;
        });
      } else {
        this.pageTitle = this.pageTitle + 'Add';
        this.userBook = new UserBook();
      }

      this.bookService.getBooks().subscribe((returnedBooks: Book[]) => {
        this.books = returnedBooks;
      });

      this.userService.getUsers().subscribe((userTypesTheReturn: User[]) => {
        this.users = userTypesTheReturn;
      });
    });
  }

  getFormData(): UserBook {
    const data = new UserBook()
    data.bookId = Number((<HTMLInputElement>document.getElementById('inputUserBookId')).value);
    data.userId = Number((<HTMLInputElement>document.getElementById('inputUserIdBook')).value);
    return data;
  }

  navigateBack(): void {
    this.location.back();
  }

  submit(): void {
    if (this.allocate) {
      this.userBook = this.getFormData();
      this.userBookService.allocateBook(this.userBook).subscribe((returnedUserBook: UserBook) => {
        this.userBook = returnedUserBook
      });
    } else {
      this.userBookService.returnBook(this.userBook).subscribe((returnedUserBook: UserBook) => {
        this.userBook = returnedUserBook
      });
    }
  }
}

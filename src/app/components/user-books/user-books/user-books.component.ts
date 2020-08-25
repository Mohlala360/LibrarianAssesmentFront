import { Component, OnInit } from '@angular/core';
import { UserBookService } from 'src/app/services/user-books/user-book.service';
import { UserBook } from 'src/app/models/user-books/user-book';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  userBooks: UserBook[];

  constructor(private userBookService: UserBookService) {
    this.userBooks = [];
  }

  ngOnInit() {
    this.userBookService.getUserBooks().subscribe((returnedUserBooks: UserBook[]) => {
      this.userBooks = returnedUserBooks;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { UserBookService } from 'src/app/services/user-books/user-book.service';
import { UserBook } from 'src/app/models/user-books/user-book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserBookStatuses } from 'src/app/models/enums/user-book-statuses';
import * as moment from 'moment';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  userBooks: UserBook[];
  pageTitle: string;

  constructor(private userBookService: UserBookService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.pageTitle = 'User Books';
    this.userBooks = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userBookService.getUserBooks().subscribe((returnedUserBooks: UserBook[]) => {
        if (returnedUserBooks.length > 0) {
          this.userBooks = returnedUserBooks;
          this.userBooks.forEach((userBook: UserBook) => {
            userBook.currentState = userBook.userBookStates[0];
          });
        }
      });
    });
  }

  getRowClass(userBook: UserBook): string {
    let rowClass = '';
    if (userBook.currentState.useBookStatusId != UserBookStatuses.Return) {
      const updatedTimeSpan = (new Date()).getTime() - moment((userBook.currentState.userBookStateDateUpdated)).toDate().getTime();
      if (updatedTimeSpan > 1000 * 60 * 60 * 24 * 5) {
        rowClass = 'danger';
      }
      return rowClass;
    }
  }

  navigateBack(): void {
    this.location.back();
  }
}

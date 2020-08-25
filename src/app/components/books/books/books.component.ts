import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from 'src/app/models/books/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  pageTitle: string;

  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.pageTitle = 'Books';
    this.books = [];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.bookService.getBooks().subscribe((returnedBooks: Book[]) => {
        this.books = returnedBooks;
      });
    });
  }

  navigateBack(): void {
    this.location.back();
  }
}

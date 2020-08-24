import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit() {
  }

}

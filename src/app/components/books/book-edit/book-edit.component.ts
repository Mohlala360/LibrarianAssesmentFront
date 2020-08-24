import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';
import { AuthorService } from 'src/app/services/authors/author.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit() {
  }

}

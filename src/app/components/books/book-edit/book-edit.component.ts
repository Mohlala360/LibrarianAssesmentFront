import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books/book.service';
import { AuthorService } from 'src/app/services/authors/author.service';
import { Author } from 'src/app/models/authors/author';
import { Book } from 'src/app/models/books/book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  authors: Author[];
  book: Book;
  pageTitle: string;
  addNewAuthor: boolean;
  
  constructor(private bookService: BookService,
    private authorService: AuthorService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.pageTitle = 'Book';
    this.authors = [];
    this.addNewAuthor = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const edit = !!(params['id']);
      if (edit) {
        this.pageTitle = this.pageTitle + 'Edit';
        const bookId = +params['id'];
        this.bookService.getBookById(bookId).subscribe((returnedBook: Book) => {
          this.book = returnedBook;
        });
      } else {
        this.getAuthors();
        this.book = new Book();
      }
    });
  }

  getAuthors(): void {
    this.authorService.getAuthors().subscribe((returnedAuthors: Author[]) => {
      this.authors = returnedAuthors;
    });
  }

  addAuthor(): void {
    this.addNewAuthor = true;
    this.book.author = new Author();
  }

  newAuthor(): void {
    this.book.author.name = (<HTMLInputElement>document.getElementById('inputAuthorName')).value;
    this.book.author.surname = (<HTMLInputElement>document.getElementById('inputAuthorSurname')).value;
  }

  getBookFormData(): Book {
    const data = new Book()
    data.title = (<HTMLInputElement>document.getElementById('inputBookTitle')).value;
    data.publishDate = new Date((<HTMLInputElement>document.getElementById('inputBookPublishDate')).value);
    return data;
  }

  navigateBack(): void {
    this.location.back();
  }

  submit(): void {
    this.book = this.getBookFormData();
    if (this.addNewAuthor) {
      this.newAuthor();
    }
    this.bookService.addBook(this.book).subscribe((returnedBook: Book) => {
      this.book = returnedBook;
    })
  }
}

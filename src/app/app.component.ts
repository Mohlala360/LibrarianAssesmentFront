import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'LibrarianAssesmentFront';
  g: any;

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.bookService.getWeathor().subscribe((g: any) => {
      g = g;
      console.log(g);
    });
  }
}

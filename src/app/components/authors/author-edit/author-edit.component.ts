import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/authors/author.service';
import { Author } from 'src/app/models/authors/author';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  author: Author;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.author = new Author();
  }

  submit(): void {
    this.authorService.add(this.author).subscribe((returnedAuthor:Author) => {

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/authors/author.service';
import { Author } from 'src/app/models/authors/author';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  author: Author;
  pageTitle: string;

  constructor(private authorService: AuthorService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.pageTitle = 'Author';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const edit = !!(params['id']);
      if (edit) {
        this.pageTitle = this.pageTitle + 'Edit';
        const authorId = +params['id'];
        this.authorService.getAuthor(authorId).subscribe((returnedAuthor: Author) => {
          this.author = returnedAuthor;
        });
      } else {
        this.pageTitle = this.pageTitle + 'Add';
        this.author = new Author();
      }
    });
  }

  submit(): void {
    this.authorService.add(this.author).subscribe((returnedAuthor: Author) => {
      this.author = returnedAuthor;
    });
  }

  navigateBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/authors/author.service';
import { Author } from 'src/app/models/authors/author';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: Author[];
  pageTitle: string;

  constructor(private authorService: AuthorService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.pageTitle = 'Authors';
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.authorService.getAuthors().subscribe((returnedAuthors: Author[]) => {
        this.authors = returnedAuthors;
      });
    });
  }

  navigateBack(): void {
    this.location.back();
  }
}

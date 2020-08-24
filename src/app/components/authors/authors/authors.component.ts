import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/authors/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

}

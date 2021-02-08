import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './services/books/book.service';
import { ControlService } from './services/controlService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'LibrarianAssesmentFront';
  g: any;
  navigation: any;

  constructor(private controlService: ControlService,private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot);
  }

  ngOnInit() {

  }

  home() {
    this.controlService.navigateHome();
  }
}

import { Component, OnInit } from '@angular/core';
import { Author } from '../authors';
import { BookshopService } from '../service/bookshop.service';
import {Authors} from '../models';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
      authors: Authors[];

  constructor(private bookshopService: BookshopService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void {
    this.bookshopService.getAuthors()
    .subscribe(authors => this.authors = authors);
  }

}

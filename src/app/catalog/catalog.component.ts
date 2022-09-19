import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private bookService:BookService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(searchResult => {
      this.books = searchResult.items;
    })
  }

}

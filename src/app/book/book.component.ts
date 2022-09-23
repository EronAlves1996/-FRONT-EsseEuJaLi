import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookIsbn: string = "";
  book: Book = new Book();

  constructor(private activatedRoute: ActivatedRoute, private bookService:BookService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(n=> this.bookIsbn = n['isbn'])
    .add(this.getBookInformation());
  }

  getBookInformation():void {
    this.bookService.getBook(this.bookIsbn).subscribe(book => this.book = book.items[0]);
  }

  calculatePoints(): number {
    return this.bookService.calculatePoints(this.book.volumeInfo.pageCount);
  }

}

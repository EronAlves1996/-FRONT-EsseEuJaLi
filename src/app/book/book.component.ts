import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
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
  readed: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(n => this.bookIsbn = n['isbn'])
      .add(this.getBookInformation());
  }

  getBookInformation(): void {
    this.bookService.getBook(this.bookIsbn).pipe(switchMap(book => {
      this.book = book.items[0];
      return this.bookService.verifyIfIsRead(book.items[0].id);
    })).subscribe(response => this.readed = response.status === 200 ? true : false);
  }

  calculatePoints(): number {
    return this.bookService.calculatePoints(this.book.volumeInfo.pageCount);
  }

  markAsRead(): void {
    console.log(this.book.id, this.book.volumeInfo.categories[0])
    this.bookService.markAsRead(this.book.id, this.book.volumeInfo.categories[0]).subscribe(response => {
      console.log(response.status);
      response.status === 202 ? this.readed = true : this.readed = false;
    });
  }

}

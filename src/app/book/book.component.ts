import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookIsbn: string = "";

  constructor(private activatedRoute: ActivatedRoute, private bookService:BookService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(n=> this.bookIsbn = n['isbn']);
    this.getBookInformation();
  }

  getBookInformation(){
    this.bookService.getBook(this.bookIsbn).subscribe(console.log);
  }

}

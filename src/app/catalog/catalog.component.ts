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
  searchBook:string = ''

  constructor(
    private bookService:BookService
  ) { }

  ngOnInit(): void {
    this.bookService.search("random").subscribe(searchResult => {
      this.books = searchResult.items;
    })
  }

  search(): void{
    this.bookService.search(encodeURI(this.searchBook.replace(' ', '+').toLocaleLowerCase())).subscribe(searchResult=> {
      this.books = searchResult.items.filter(n => n.volumeInfo.imageLinks);
    });
  }

}

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
  searchBook:string = 'Harry Potter';
  totalPages: number[] = [];
  startIndex:number = 0;
  actualPage: number = 1;

  constructor(
    private bookService:BookService
  ) { }

  ngOnInit(): void {
    this.search();
  }

  search(): void{
    this.bookService.search(encodeURI(this.searchBook.replace(' ', '+').toLocaleLowerCase())).subscribe(searchResult=> {
      this.totalPages = []
      for(let i = 0; i < Math.floor((searchResult.totalItems)/20); i++){
        this.totalPages.push(i+1);
      };
      this.books = searchResult.items.filter(n => n.volumeInfo.imageLinks);
    });
  }

  searchOnEnter(e: any): void {
    if(e.key === "Enter") this.search();
  }

  goToIndexInSearch(index: number): void {
    this.bookService.search(this.searchBook, index * 20).subscribe(searchResult=> {
      this.books = searchResult.items.filter(n=>n.volumeInfo.imageLinks);
      this.actualPage = index + 1;
    })
  }

}

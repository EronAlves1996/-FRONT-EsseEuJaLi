import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { UserServiceService } from '../services/user-service.service';
import { BookReaded } from '../shared/bookReaded';
import { User } from '../shared/user';

@Component({
  selector: 'app-my-status',
  templateUrl: './my-status.component.html',
  styleUrls: ['./my-status.component.css']
})
export class MyStatusComponent implements OnInit {

  user: User = new User();
  readedBooksVar: BookReaded[] = [];
  related_points: number = 0;
  totalByCategory: any = {};
  trophys: string[] = [];

  constructor(private userService: UserServiceService, private bookService: BookService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.bookService.getUserReadedBooks().subscribe(readedBooks => {
      this.readedBooksVar = readedBooks;
      this.related_points = this.readedBooksVar.reduce((acc: number, next:BookReaded)=> acc + next.related_points, 0);
      this.totalByCategory = this.readedBooksVar.reduce((acc: any, next: BookReaded) => {
        acc.hasOwnProperty(next.categorie) ? acc[`${next.categorie}`]++ : acc[`${next.categorie}`] = 1;
        return acc;
      }, {});
      this.trophys = Object.keys(this.totalByCategory).filter((categorie, index) => <number>Object.values(this.totalByCategory)[index] >= 5);
    });
  }

}

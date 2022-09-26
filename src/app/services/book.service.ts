import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { Search } from '../shared/book';
import { BookReaded } from '../shared/bookReaded';
import { User } from '../shared/user';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyB13cqdwanOGh_UcPJR04luUaT-iEXcRrY&";
  private server: string = "http://localhost:8080/api/";

  constructor(private http: HttpClient, private userService: UserServiceService) { }

  search(searchParameter: string, startIndex: number = 0): Observable<Search> {
    return this.http.get<Search>(this.url + encodeURI("q=" + searchParameter + "&maxResults=20&startIndex=" + startIndex));
  }

  getBook(bookISBN: string): Observable<Search> {
    return this.http.get<Search>(this.url + "q=isbn:" + bookISBN);
  }

  //getBooksForUser(): Observable

  calculatePoints(pageCount: number): number {
    return 1 + Math.floor(pageCount / 100);
  }

  markAsRead(bookId: string, categorie: string, points: number): Observable<HttpResponse<string>> {
    const actualUser: User = this.userService.getUser();
    return this.http.post<string>(this.server + "readed", JSON.stringify({
      user: actualUser.email,
      book_id: bookId,
      categorie: categorie,
      related_points: points
    }), {
      headers: { "Content-Type": "application/json" }, observe: 'response'
    });

  }
  verifyIfIsRead(bookId: string): Observable<HttpResponse<Object>> {
    return this.http.get(this.server + "readed/" + bookId, {withCredentials:true, observe: 'response'});
  }

  getUserReadedBooks(): Observable<BookReaded[]>{
    return this.http.get<BookReaded[]>(this.server + "readed/", {withCredentials: true});
  }
}
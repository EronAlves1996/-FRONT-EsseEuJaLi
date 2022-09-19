import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyB13cqdwanOGh_UcPJR04luUaT-iEXcRrY&";
  constructor(private http: HttpClient) { }

  search(searchParameter:string): Observable<Search> {
    return this.http.get<Search>(this.url + "q=" + searchParameter + "&maxResults=20");
  }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: User = new User();
  userObservable: Subject<User> = new Subject<User>();

  constructor(private http:HttpClient) {  }

  login(email:string, password:string): Observable<User> {
    let header:HttpHeaders = new HttpHeaders({
      ["Authorization"]: btoa(email.concat(":", password))
    });
    return this.http.get<User>("http://localhost:8080/api/login/", {headers: header, withCredentials: true});
  }

  verifyLogin(): Observable<unknown>{
    return this.http.get<unknown>("http://localhost:8080/api/validate/", {observe: 'response', withCredentials:true});
  }

  logout(): Observable<unknown>{
    return this.http.delete<unknown>("http://localhost:8080/api/logout", {withCredentials: true});
  }

  getUserObservable(): Observable<User>{
    return this.userObservable;
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User) {
    this.userObservable.next(user);
    this.user = user;
  }
}

type statusCheck = {
  status:number;
};
